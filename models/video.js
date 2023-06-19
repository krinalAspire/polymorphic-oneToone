const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Video = sq.define("video", {
      title:DataTypes.STRING,
      text:DataTypes.STRING
  });

//   Kid.sync({alter:true}).then(() => {
//     console.log("Kid Model synced");
//   });

  module.exports = Video;