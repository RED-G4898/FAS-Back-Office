import express from 'express';
import multer from 'multer';

import Product from './../model/Products.mjs';

import { uploadToContabo, getSignedUrl } from '../controllers/contaboStorage.mjs';

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/products/add', upload.single('image'), async (req, res) => {
    try {
      // Subir la imagen a Contabo Object Storage
      if (req.file) {
        console.log('Uploading image to Contabo...');
        const imageUrl = await uploadToContabo(req.file.buffer, req.file.originalname);
        console.log('Image uploaded:', imageUrl);
        const fileName = imageUrl.split('/').pop();
        req.body.image = fileName;
      } else {
        req.body.image = null;
      }
  
      // Crear y guardar el producto en la base de datos
      console.log('Creating and saving product...');
      const product = new Product(req.body);
      await product.save();
      console.log('Product saved:', product);
  
      // Enviar la respuesta
      res.status(201).json({
        status: '201 Created! ✓',
        data: {
          product,
        },
      });
      console.log('Product added to database!');
    } catch (error) {
      console.error("There's an error with the request", error);
  
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Request failed! ✕',
          message: 'Error during file processing',
        });
      } else {
        res.status(500).json({
          status: 'Server error! ✕',
          message: 'Internal server error',
        });
      }
    }
  });
  

  router.get('/products/get', async (req, res) => {
    try {
      const products = await Product.find({});
      const productsWithSignedUrls = products.map(product => {
        if (product.image) {
          const signedUrl = getSignedUrl(product.image, 300);
          return { ...product.toObject(), imageUrl: signedUrl };
        }
        return product;
      });
      res.status(200).json({
        status: '200 Ok! ✓',
        data: {
          products: productsWithSignedUrls,
        },
      });
      console.log('Products retrieved from the database!');
    } catch (error) {
      console.log("There's an error with the request", error);
      res.status(500).json({
        status: 'Server error! ✕',
        message: error,
      });
    }
  });

  router.patch('/products/update/:barcode',upload.single('image'), async (req, res) => {
    try {
      let updatedProductData = req.body;
  
      console.log('Request body:', req.body);
  
      if (req.files && req.files.image) {
        console.log('Image file found:', req.files.image);
  
        const file = req.files.image;
        const fileName = `${req.params.barcode}_${file.name}`;
        const fileUrl = await uploadToContabo(file.data, fileName);
        
        console.log('Image uploaded:', fileUrl);
  
        updatedProductData.image = fileUrl;
      }
  
      const product = await Product.findOneAndUpdate(
        { barcode: req.params.barcode },
        updatedProductData,
        {
          new: true,
          runValidators: true,
        }
      );
  
      console.log('Product before signing URL:', product);
  
      if (product.image) {
        product.image = getSignedUrl(product.image);
      }
  
      console.log('Product after signing URL:', product);
  
      res.status(200).json({
        status: '200 Ok! ✓',
        data: {
          product,
        },
      });
      console.log('Product updated in database!');
    } catch (error) {
      res.status(400).json({
        status: 'Request failed! ✕',
        message: error,
      });
      res.status(500).json({
        status: 'Server error! ✕',
        message: error,
      });
      console.log("There's an error with the request");
    }
  });
  

router.delete('/products/delete/:barcode', async (req, res) => {
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