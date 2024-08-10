const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const mongoose = require('mongoose');
const app = express()

var corsOptions = {
  origin: "http://localhost:3000",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}

mongoose.connect('mongodb://127.0.0.1:27017/API').then(()=>{
    console.log('connected');
})
.catch(()=>{
   console.log('connection error'); 
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors(corsOptions));
app.use("/students",studentRoutes);


app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})