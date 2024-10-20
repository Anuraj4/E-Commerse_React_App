import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import colors from 'colors';
import { fileURLToPath } from 'url';
import path from 'path';

// configure env
dotenv.config();

// databse config
connectDB();

// esmodule
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename);

// rest object
const app = express();

// middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/build')));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to ecommerce app</h1>');
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err.message}`.red);
  } else {
    console.log(
      `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
    );
  }
});
