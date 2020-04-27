module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://thingful@localhost/thingful',
  JWT_SECRET: process.env.JWT_SECRET || 'kdiKgG^53G69hf$8-JF7Jlj'
}
