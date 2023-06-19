const Kid=require("../models/kid");
const Video = require("../models/video");
const Image=require("../models/image")

exports.kids=async(req,res)=>{
    try{
       const user=await Kid.findAll();
       res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.create=async(req,res)=>{
    try{
        const {title, commenttableID, commenttableType}=req.body;
        const user=await Kid.create({
            title, commenttableID, commenttableType
        })
        // console.log(user);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.updatekid=async(req,res)=>{
    try{
      const id=req.params.id;
      const user=await Kid.update(req.body, {
        where: { id : id}
      })
      res.send("updated");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.getkid=async(req,res)=>{
    try{
        const id=req.params.id;
        const user= await Kid.findByPk(id);
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

exports.deletekid=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=Kid.destroy({
            where: {id : id}
        })
        res.send("deleted");
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}

// exports.scops=async(req,res)=>{
//     try{
//         let data=await Kid.scope(['checkstatus']).findAll();
//         res.send(data);
//     }catch(err){
//         console.log(err.message);
//         res.status(400).json({message: err.message});
//     }
 
// }

exports.polymorphic=async(req,res)=>{
    try{
       let data= await Kid.findAll({
        include:[Image, Video]
       });
       res.send(data);
    }catch(err){
        console.log(err.message);
        res.status(400).json({message: err.message});
    }
}