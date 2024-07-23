import express from 'express';
import { submitData, getData } from '../controllers/company.js';
const router = express.Router();

//post Api
router.post('/submit', submitData);

//Get Api
router.get('/fetch/:companyName', getData);

export { router };
