const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('test',process.env.user, process.env.password,{
    host: 'localhost', 
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
    // SQLite only
    storage: 'path/to/database.sqlite'
  });

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  sequelize.sync({alter:true}).then(()=>{
    console.log("model synced");
  }).catch((err)=>{
    console.log(err);
  });

  module.exports = { sq: sequelize, testDbConnection };