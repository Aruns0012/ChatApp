const express = require("express");
const router = express.Router();
const {loginController, registerController} = require("../controllers/userControllers")

router.get("/",(req,res)=>{
    res.send("yu are here");
});

router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;