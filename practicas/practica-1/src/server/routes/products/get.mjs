// npm modules
import express from 'express';

// Project modules
import { Product } from './../../model/Products.mjs';

const router = express.Router();

// get route
router.get('/get', async (req, res) => {
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

export default router;