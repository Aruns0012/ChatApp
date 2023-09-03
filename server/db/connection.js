const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
DB = process.env.Database

mongoose.connect(DB)
.then(()=>{console.log("connedted to database")})
.catch(()=>console.log("error in connecting db"))