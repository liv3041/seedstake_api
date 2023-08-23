require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 3000;
const bodyParser = require('body-parser');
// const controllers = require("./Controllers/userControllers");
app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.json());
// app.put("/")

app.post('/data', (req, res) => {
    const jsonData = req.body; // JSON data sent from Postman
    console.log(jsonData);
    res.json({ message: 'Data received successfully.' });
  });


// get response
app.get("/",(req,res)=>{
    res.status(200).json("server start");
});

// server start

app.listen(PORT, ()=>{
    console.log(`server start at Port No ${PORT}`);
});