module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: 'mysql',
    password: 'secret',
    database: 'school_prod',
    host: 'localhost',
    dialect: 'mysql'
  }
}
