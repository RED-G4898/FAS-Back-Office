// npm modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// DB connection data
const USER = process.env.DB_USER;
const PASSWD = process.env.DB_PASSWORD;
const CLUSTER = process.env.DB_CLUSTER;
const URI = `mongodb+srv://${USER}:${PASSWD}@${CLUSTER}/?retryWrites=true&w=majority`;
const OPT = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'fas'
}

// DB connection
export const connectDB = async () => {
  try {
    await mongoose.connect(URI, OPT);
    console.info('DB Connected! ✓');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}