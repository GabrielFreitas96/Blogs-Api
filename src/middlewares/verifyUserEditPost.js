const postService = require('../services/postService');
const decodeEmail = require('../helpers/decodeEmail');
const userService = require('../services/userService');

const verifyUserEditPost = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { userId } = await postService.getById(+id);
  console.log('usuario dono', userId);
  const email = decodeEmail(token);
  console.log('email do usuario logado', email);
  const idUserLoged = await userService.getEmailById(email);
  console.log('id do usuário logado', idUserLoged);
  if (userId !== idUserLoged) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = verifyUserEditPost;