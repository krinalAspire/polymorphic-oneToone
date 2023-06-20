const { sq } = require("../db/conn");

const { DataTypes } = require("sequelize");

const Tag_taggable = sq.define("tag_taggable", {
      tagid:DataTypes.INTEGER,
      taggableid:DataTypes.INTEGER,
      taggableType:DataTypes.STRING
  });

//   Kid.sync({alter:true}).then(() => {
//     console.log("Kid Model synced");
//   });

  module.exports = Tag_taggable;