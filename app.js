import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import { router } from './routes/comapany.js';
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8000;

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api', router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(`Error occured while creating database`));

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
