import mongoose from "mongoose";

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

const Product = mongoose.model('Product', ProductSchema, 'products');

export default Product;