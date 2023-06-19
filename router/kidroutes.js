const express=require("express");
const router = new express.Router();
const kidsroute=require("../controller/kidcontroller");

router.get("/kid", kidsroute.kids);

router.post("/kid", kidsroute.create);

router.get("/poly-kid", kidsroute.polymorphic);

// router.get("/kid/:id", kidsroute.getkid);

// router.patch("/kid/:id", kidsroute.updatekid);

// router.delete("/kid/:id", kidsroute.deletekid);

// router.get("/scope", kidsroute.scops);

module.exports=router;