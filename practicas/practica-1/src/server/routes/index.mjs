// npm modules
import express from 'express';

// project modules
import productsRoutes from './products/products.mjs';

const router = express.Router();

router.use('/fas/api', productsRoutes);

export default router;
