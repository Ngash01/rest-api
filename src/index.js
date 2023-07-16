import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import productRoute from "./routes/productRoute.js";

const mongo_url = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use('/api', productRoute)

app.get('/', (req,res)=>{
  // throw new Error("error occured")
  res.send("This is an error test")
})

app.use('api/products', productRoute)

mongoose.connect(mongo_url)
.then(()=>{
  console.log("connection to mongodb established")
  app.listen(port, ()=> console.log("server running on port http://localhost:5000"))
 
})
.catch((err)=>{
  console.log(err)
});
