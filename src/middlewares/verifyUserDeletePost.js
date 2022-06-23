const postService = require('../services/postService');
const decodeEmail = require('../helpers/decodeEmail');
const userService = require('../services/userService');

const verifyUserDeletePost = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const postId = await postService.getById(+id);
  if (!postId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  const { userId } = postId;
  // console.log('usuario dono', userId);
  const email = decodeEmail(token);
  // console.log('email do usuario logado', email);
  const idUserLoged = await userService.getEmailById(email);
  // console.log('id do usuário logado', idUserLoged);
  if (userId !== idUserLoged) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = verifyUserDeletePost;