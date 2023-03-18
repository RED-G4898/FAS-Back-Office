import express from 'express';

import productsRouter from './products.mjs';

export const router = express.Router();

router.use('/fas/api', productsRouter);

export default router;