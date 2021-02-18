const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const url = 'mongodb://localhost/StudDB';

const app = express();
let port = process.env.PORT || 9000;

mongoose.connect(process.env.MONGODB_URI || url, {
  useNewUrlParser: true
});

const con = mongoose.connection;

con.on('open', () => console.log('Connected...'));

app.use(express.json())

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

const studentRouter = require('./routers/students');
app.use('/students', studentRouter);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('/'))
}

app.listen(port, () => console.log("Server Started"))
