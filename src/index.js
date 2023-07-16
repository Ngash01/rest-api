import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./models/ProductModel.js";


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=>{
  res.send("This is to test our database server")
});

// create a product to the db
app.post('/products', async(req,res)=>{
  const product = await Product.create(req.body);
  res.send("product created successfully to the database")
})


// fetch all products 
app.get('/products', async(req,res)=>{
  try{
    const fetchProduct = await Product.find();
    res.status(200).json(fetchProduct);
  }
  catch(err){
    console.error(err)
  }
});

// fetch a specific product

app.get("/products/:id", async(req,res)=>{
  try{
    const {id} = req.params;
    const fetchOneproduct = await Product.findById(id);
    res.status(200).send(fetchOneproduct)
  }
  catch(err){
    console.error(err)
  }
});


// update products in the db

app.put("/products/:id", async(req,res)=>{
  try{
    const {id} = req.params;
    const Updateproduct = await Product.findByIdAndUpdate(id, req.body);
    if(!Updateproduct){
      res.status(400).send("The requested id does not match id in the db")
    }
    res.status(200).send("product updated successfully")
  }
  catch(err){
    console.error(err)
    res.status(404).send(err)
  }
});

// delete a product from the database

app.delete("/products/:id", async(req, res)=>{
 try{
  const {id} = req.params;
  const deleteProduct = await Product.findByIdAndRemove(id, req.body);
  if(!deleteProduct){
    res.status(400).send("The requested id does not match id in the db")
  }
  res.status(200).send("product deleted successfully")

 }
 catch(err){
  console.err(err)
 }
})


app.get("*", (req,res)=>res.status(404).send("requested page does not exist"))


mongoose.connect("mongodb+srv://kimaniamos82:nganga2001@cluster0.danbahl.mongodb.net/nodejs-app-2?retryWrites=true&w=majority")
.then(()=>{
  console.log("connection to mongodb established")
  app.listen(5000, ()=> console.log("server running on port http://localhost:5000"))
 
})
.catch((err)=>{
  console.log(err)
})
