const express = require("express");
const dotenv = require("dotenv");
require("./db/connection");
const router = require("./routes/userRoutes")
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(PORT, console.log(`server is running on ${PORT}`))