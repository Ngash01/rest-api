import express  from "express";
import Product from "../models/ProductModel.js";
import { FetchedProduts, UpdateProduct, createProduct, deleteProduct, getAll, singleProduct } from "../controller/ProductController.js";

const router = express.Router();

// test the db
router.get('/', getAll);

// create a product to the db
router.post('/products', createProduct)


// fetch all products 
router.get('/products', FetchedProduts);

// fetch a singleProduct
router.get("/products/:id", singleProduct);


// update products in the db

router.put("/products/:id", UpdateProduct);

// delete a product from the database

router.delete("/products/:id", deleteProduct)


router.get("*", (req,res)=>res.status(404).send("requested page does not exist"))

export default router;