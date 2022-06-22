require('dotenv').config();
const app = require('./api');
const routerCategories = require('./routers/routerCategories');
const routerLogin = require('./routers/routerLogin');
const routerUser = require('./routers/routerUser');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.get('/teste', (req, res) => {
  res.status(200).json({ message: 'Está funcionando' });
});
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);

app.listen(port, () => console.log('ouvindo porta', port));