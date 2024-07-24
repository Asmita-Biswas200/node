import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { router } from './routes/comapany.js';
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Company Service API',
    version: '1.0.0',
    description: 'API documentation',
  },
  servers: [
    {
      url: 'http://localhost:8000/api',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', router);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(`Error occured while creating database`));

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}`);
});
