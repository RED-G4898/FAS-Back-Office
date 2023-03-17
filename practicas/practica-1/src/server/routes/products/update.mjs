// npm modules
import express from 'express';

// Project modules
import { Product } from './../../model/Products.mjs';

const router = express.Router();

// update route
router.patch('/update/:barcode', async (req, res) => {
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