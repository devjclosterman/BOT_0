module.exports = {
    apiKey: process.env.API_KEY,
    databasePassword: process.env.DATABASE_PASSWORD
};


// when you need to require this use this:
// const config = require('./config/keys');
// console.log('Using API Key:', config.apiKey);
