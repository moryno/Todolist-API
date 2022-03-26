// jshint esversion:6
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose.connect("mongodb://localhost:27017/my-todolistDB");
//   .then(()=> console.log("Connected successfully"))
//   .catch((err)=> console.error(err));


app.use("/todos", todoRoutes);



app.listen(3030, function(){
    console.log("Server is running on port 3030");
});