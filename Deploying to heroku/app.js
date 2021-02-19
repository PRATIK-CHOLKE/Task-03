const express = require('express')
const connectDB = require('./models/Connection');
const app = express();

connectDB();

app.use(express.json({ extended:false}));
app.use('/API/studModel', require('./API/stud'));


const Port = process.env.PORT || 9000;

app.listen(Port, () => console.log("Server started"))