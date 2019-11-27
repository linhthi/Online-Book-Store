const env = {
    database: 'testdb',
    username: 'root',
    password: '12345678',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  