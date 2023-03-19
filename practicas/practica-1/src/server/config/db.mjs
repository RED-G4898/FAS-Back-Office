import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const CLUSTER = process.env.DB_CLUSTER;

const uri = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'fas'
}

const connectDB = async () => {
    try {
        await mongoose.connect(uri, options);
        console.log("Database connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}


export default connectDB;