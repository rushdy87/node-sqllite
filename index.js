const express = require('express');
const sequelize = require('./database');

sequelize
  .sync()
  .then(() => console.log('The database is ready..'))
  .catch((err) => console.log(err));

const app = express();

app.listen(3030, () => console.log('The server running on port 3030..'));
