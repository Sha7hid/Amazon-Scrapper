require("dotenv").config();
const express = require("express");
var {main} =require('./tests/scrapper.spec')
const bodyParser = require("body-parser");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}


const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
const connectDB = require("./config/db");
main()

const mongo_uri = `mongodb+srv://shahid:arthur#540913@cluster0.ggcnvuy.mongodb.net/scrapper`;

connectDB();
const port = process.env.PORT || 443;
console.log({ port });
// Routes
app.use("/", require("./routes/user"));
app.listen(port);