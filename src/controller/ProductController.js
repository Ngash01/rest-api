import Product from "../models/ProductModel.js"

// get all products
export const getAll = (req, res)=>{
  res.send("This is to test our database server")
}

// create a product
export const createProduct = async(req,res)=>{
  try{
    const product = await Product.create(req.body);
    res.send("product created successfully to the database")
  
  }
  catch(err){
    console.error(err)
  }
}

// fetch all products;

export const FetchedProduts = async(req,res)=>{
  try{
    const fetchProduct = await Product.find();
    res.status(200).json(fetchProduct);
  }
  catch(err){
    console.error(err)
  }
}

// fetch a specific product

export const singleProduct = async(req,res)=>{
  try{
    const {id} = req.params;
    const fetchOneproduct = await Product.findById(id);
    res.status(200).send(fetchOneproduct)
  }
  catch(err){
    console.error(err)
  }
}

// update products in the db

export const UpdateProduct =  async(req,res)=>{
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
}

// delete product from the database

export const deleteProduct = async(req, res)=>{
  try{
   const {id} = req.params;
   const deleteProduct = await Product.findByIdAndRemove(id, req.body);
   if(!deleteProduct){
     res.status(400).send("The requested id does not match id in the db")
   }
   res.send("product deleted successfully")
 
  }
  catch(error){
   console.error(error);
  }
 }