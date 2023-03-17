// npm modules
import mongoose from "mongoose";

// mongoose schema definition
const ProductSchema = new mongoose.Schema({
  barcode : {
    type : String,
    required : true
  },
  name : {
    type : String,
    required : true
  }
});

// mongoose model definition
export const Product = mongoose.model('Product', ProductSchema, 'products');