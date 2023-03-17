// npm modules
import express from 'express';

// Project modules
import { Product } from './../../model/Products.mjs';

const router = express.Router();

// delete route
router.delete('/delete/:barcode', async (req, res) => {
  try {
      const product = await Product.deleteOne({barcode : req.params.barcode});
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