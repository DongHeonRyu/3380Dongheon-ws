const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path:'variable.env'})

const app = express();
const port = 8000;
const corsOptions = {
  origin: "*",
};

app.use(cors());
app.use(bodyParser.json());

//Connect Mongoose
// const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URL,{ useUnifiedTopology: true,useNewUrlParser: true})
// const db = mongoose.connection

// db.on('error',(error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



//Connet route
app.use("/favorite", cors(corsOptions), require("./routes/favorite"));

app.listen(port, () => {
  console.log(`Web Service Listening on port ${port}`);
});
