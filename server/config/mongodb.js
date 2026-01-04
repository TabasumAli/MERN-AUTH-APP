import mongoose from 'mongoose';
import 'dotenv/config.js';

const MONGODB_URL = process.env.MONGODB_URL;

const connetDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to database');
        })

        await mongoose.connect(`${MONGODB_URL}/mern-auth`);
        // console.log('Connected to MongoDB');
    } catch (error) {
        // console.error('Error connecting to MongoDB:', error);
        // process.exit(1);
    }
};


export default connetDB;