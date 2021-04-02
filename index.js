const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config({path:'variable.env'})

const app = express();
const port = 9000;
const corsOptions = {
  origin: "*",
};

app.use(cors());
app.use(bodyParser.json());


const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



//Connet route
app.use("/ratemovie", cors(corsOptions), require("./routes/favorite"));

app.listen(port, () => {
  console.log(`Web Service Listening on port ${port}`);
});
