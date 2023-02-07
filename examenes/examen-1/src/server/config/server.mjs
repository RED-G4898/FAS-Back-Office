import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './db.mjs';
import router from '../routes/index.mjs';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.SERVER_PORT;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});