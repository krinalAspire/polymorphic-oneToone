const express=require("express");
const router = new express.Router();
const videosroute=require("../controller/videocontroller");

router.get("/video", videosroute.videos);

router.post("/video", videosroute.create);

// router.get("/poly-video", videosroute.polymorphic);

router.get("/polymany-video", videosroute.polymorphicmany);

module.exports=router;