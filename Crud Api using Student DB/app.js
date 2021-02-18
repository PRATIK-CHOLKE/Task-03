const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/StudDB';

const app = express();
let port = process.env.PORT || 9000;

mongoose.connect(process.env.MONGODB_URI || url, {
  useNewUrlParser: true
});
const con = mongoose.connection;

con.on('open', () => console.log('Connected...'));

app.use(express.json())

const studentRouter = require('./routers/students');
app.use('/students', studentRouter);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('/'))
}

app.listen(port, () => console.log("Server Started"))
