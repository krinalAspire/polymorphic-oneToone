const express=require("express");
const router = new express.Router();
const tagroute=require("../controller/tagcontroller");

router.get("/tag", tagroute.tag);

router.post("/tag", tagroute.create);

// router.get("/poly-tag", tagroute.polymorphic);

router.get("/polymany-tag", tagroute.polymorphicmany);

module.exports=router;