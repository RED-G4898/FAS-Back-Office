// npm modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


// project modules
import { connectDB } from './db.mjs';
import router from './../routes/index.mjs';

dotenv.config();

const app = express();
const PORT = process.env.SV_PORT;

app.use(express.json());
app.use(cors());
app.use(router);

connectDB();

app.listen(PORT, () => {
  console.info(`Server running on port: ${PORT}!`);
});