// npm modules
import express from 'express';

// project modules
import addRoute from './add.mjs';
import getRoute from './get.mjs';
import updateRoute from './update.mjs';
import deleteRoute from './delete.mjs';

const router = express.Router();

router.use('/products', addRoute, getRoute, updateRoute, deleteRoute);

export default router;