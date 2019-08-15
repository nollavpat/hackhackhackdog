require('dotenv').config();

const {USERNAME, PASSWORD, DATABASE} = process.env;

module.exports = {
  client: 'mysql',
  connection: {
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE,
  },
};
