const Sequelize = require("sequelize");
require("dotenv").config();

const sequelizeInstance = new Sequelize({
    database: process.env.DB_NAME,
    username: 'root',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    dialect: 'mysql',
});

// here test the connection is estabilish successfully or not.
(async () => {
    try {
        await sequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelizeInstance;







































