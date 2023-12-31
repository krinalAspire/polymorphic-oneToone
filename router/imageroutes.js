const express=require("express");
const router = new express.Router();
const imageroute=require("../controller/imagecontroller");

router.get("/image", imageroute.Image);

router.post("/image", imageroute.create);

// router.get("/poly", imageroute.polymorphic);

router.get("/polymany", imageroute.polymorphicmany);

module.exports=router;