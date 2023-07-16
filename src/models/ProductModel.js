import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  name:{
    type: String,
    required:[true, "name is a required parameter"],
  },
  quantity:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  color:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;