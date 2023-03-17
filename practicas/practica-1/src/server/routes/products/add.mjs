// npm modules
import express from 'express';

// project modules
import  { Product } from './../../model/Products.mjs';

const router = express.Router();

router.post('/add', async (req, res) => {
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

export default router;