const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Image = sq.define("image", {
      title:DataTypes.STRING,
      url:DataTypes.STRING
  });

//   Kid.sync({alter:true}).then(() => {
//     console.log("Kid Model synced");
//   });

  module.exports = Image;