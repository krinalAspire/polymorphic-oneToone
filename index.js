require('dotenv').config();
const express=require("express");
const app=express();
const kidsroute=require("./router/kidroutes");
const Kid=require("./models/kid")
const Image=require("./models/image");
const Video=require("./models/video");
const imageroute=require("./router/imageroutes");
const videoroute=require("./router/videoroutes");

app.use(express.json());

app.use(kidsroute);
app.use(imageroute);
app.use(videoroute);

Image.hasMany(Kid,{
    foreignKey:"commenttableID",
    constraints:false,
    scope:{
        commenttableType:"image"
    }
})

Video.hasMany(Kid,{
    foreignKey:"commenttableID",
    constraints:false,
    scope:{
        commenttableType:"video"
    }
})

Kid.belongsTo(Image,{
    foreignKey:"commenttableID",
    constraints:false,
})

Kid.belongsTo(Video, {
    foreignKey:"commenttableID",
    constraints:false,
});


// Kid.addScope("checkstatus", {
//     where: {
//         status:1
//     }
// })

const port=process.env.port;

app.listen(port, ()=> {
    console.log(`server listening at ${port}`);
})