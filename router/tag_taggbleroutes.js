const express=require("express");
const router = new express.Router();
const tag_taggableroute=require("../controller/tag_taggablecontroller");

router.get("/tag_taggable", tag_taggableroute.tag_taggabale);

router.post("/tag_taggable", tag_taggableroute.create);

// router.get("/poly-tag_taggable", tagroute.polymorphic);

module.exports=router;