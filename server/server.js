import express  from 'express';
import mongoose from 'mongoose';
import cors  from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config.js';
import connetDB from './config/mongodb.js';
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
connetDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Connect to MongoDB and start the server  
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB');

//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});