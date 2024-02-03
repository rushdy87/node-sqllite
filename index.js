const express = require('express');
const sequelize = require('./database');
const User = require('./User');

sequelize
  .sync()
  .then(() => console.log('The database is ready..'))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  console.log(user);
  User.create(user)
    .then(() => {
      res.send('<h1>The user is inserted..</h1>');
    })
    .catch((err) => console.log(err));
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  res.send(user);
});

app.listen(3030, () => console.log('The server running on port 3030..'));
