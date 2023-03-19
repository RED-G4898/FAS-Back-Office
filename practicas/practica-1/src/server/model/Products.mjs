import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    barcode : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    image: { // Nuevo campo para la URL de la imagen
        type: String,
      },
});

const Product = mongoose.model('Product', ProductSchema, 'products');

export default Product;