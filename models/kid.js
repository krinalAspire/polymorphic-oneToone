const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Kid = sq.define("comment", {
      title:DataTypes.STRING,
      commenttableID:DataTypes.INTEGER,
      commenttableType:DataTypes.STRING
  });

//   Kid.sync({alter:true}).then(() => {
//     console.log("Kid Model synced");
//   });

  module.exports = Kid;