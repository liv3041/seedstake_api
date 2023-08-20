require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

// get response
app.get("/",(req,res)=>{
    res.status(200).json("server start");
});

// server start

app.listen(PORT, ()=>{
    console.log(`server start at Port No ${PORT}`);
});