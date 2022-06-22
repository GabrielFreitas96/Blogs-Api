const verifyNewPost = (req, res, next) => {
const { title, content, categoryIds } = req.body;
console.log('Middleware new post', 'title', title, 'content', content, 'categoryIds', categoryIds);
if (!title || !categoryIds.length || !content) {
  return res.status(400).json({ message: 'Some required fields are missing' });
}
next();
};

module.exports = verifyNewPost;