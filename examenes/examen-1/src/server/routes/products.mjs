import express from 'express';

import Product from './../model/Products.mjs';

const router = express.Router();

router.post('/products/add', async (req, res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({
            status : '201 Created! ✓',
            data : {
                product
            }
        });
        console.log('Product added to database!');
    } catch (error) {
        res.status(400).json({
            status : 'Request failed! ✕',
            message : error,
            data : {
                product
            }
        });
        res.status(500).json({
            status : 'Server error! ✕',
            message : error,
            data : {
                product
            }
        });
        console.log("There's an error with the request");
    }
});

router.get('/products/get', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            status : '200 Ok! ✓',
            data : {
                products
            }
        });
        console.log('Product added to database!');
    } catch (error) {
        res.status(400).json({
            status : 'Request failed! ✕',
            message : error
        });
        res.status(500).json({
            status : 'Server error! ✕',
            message : error
        });
        console.log("There's an error with the request");
    }
});

router.patch('/products/update/:barcode', async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({barcode : req.params.barcode}, req.body, {
            new : true,
            runValidators : true
        });
        res.status(200).json({
            status : '200 Ok! ✓',
            data : {
                product
            }
        });
        console.log('Product added to database!');
    } catch (error) {
        res.status(400).json({
            status : 'Request failed! ✕',
            message : error
        });
        res.status(500).json({
            status : 'Server error! ✕',
            message : error
        });
        console.log("There's an error with the request");
    }
});

export default router;