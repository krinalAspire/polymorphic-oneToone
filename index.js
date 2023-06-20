require('dotenv').config();
const express=require("express");
const app=express();
const kidsroute=require("./router/kidroutes");
const Kid=require("./models/kid")
const Image=require("./models/image");
const Video=require("./models/video");
const Tag=require("./models/tag");
const Tag_taggable=require("./models/tag_taggable");
const imageroute=require("./router/imageroutes");
const videoroute=require("./router/videoroutes");
const tagroute=require("./router/tagroutes");
const tag_taggableroute=require("./router/tag_taggbleroutes");

app.use(express.json());

app.use(kidsroute);
app.use(imageroute);
app.use(videoroute);
app.use(tagroute);
app.use(tag_taggableroute);

// Image.hasMany(Kid,{
//     foreignKey:"commenttableID",
//     constraints:false,
//     scope:{
//         commenttableType:"image"
//     }
// })

// Video.hasMany(Kid,{
//     foreignKey:"commenttableID",
//     constraints:false,
//     scope:{
//         commenttableType:"video"
//     }
// })

// Kid.belongsTo(Image,{
//     foreignKey:"commenttableID",
//     constraints:false,
// })

// Kid.belongsTo(Video, {
//     foreignKey:"commenttableID",
//     constraints:false,
// });


// Kid.addScope("checkstatus", {
//     where: {
//         status:1
//     }
// })


Image.belongsToMany(Tag,{
    through:{
        model:Tag_taggable,
        unique:false,
        scope:{
            taggableType:"image"
        }
    },
    foreignKey:"taggableid",
    constraints:false
});

Tag.belongsToMany(Image, {
    through: {
        model:Tag_taggable,
        unique:false,
        scope:{
            taggableType:"image"
        }
    },
    foreignKey:"tagid",
    constraints:false
});

Video.belongsToMany(Tag, {
    through: {
        model:Tag_taggable,
        unique:false,
        scope:{
            taggableType:"video"
        }
    },
    foreignKey:"taggableid",
    constraints:false
});

Tag.belongsToMany(Video, {
    through: {
        model:Tag_taggable,
        unique:false,
        scope:{
            taggableType:"video"
        }
    },
    foreignKey:"tagid",
    constraints:false
});

const port=process.env.port;

app.listen(port, ()=> {
    console.log(`server listening at ${port}`);
})