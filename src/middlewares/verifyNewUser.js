const verifyNewUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
 return res.status(400).json({ 
   message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  // const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) === false) {
    return res.status(400).json({ 
      message: '"email" must be a valid email' });
  }
  next();
};
module.exports = verifyNewUser;