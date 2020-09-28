module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: 'mysql',
    password: 'secret',
    database: 'school_prod',
    host: 'localhost',
    dialect: 'mysql'
  }
}
