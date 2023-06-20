const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Tag = sq.define("bag", {
      name:DataTypes.STRING,
  });

//   Kid.sync({alter:true}).then(() => {
//     console.log("Kid Model synced");
//   });

  module.exports = Tag;