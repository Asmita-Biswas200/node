import express from 'express';
import { submitData, getData } from '../controllers/company.js';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Company
 *   description: Company management
 */

/**
 * @swagger
 * /submit:
 *   post:
 *     summary: Submit company data
 *     tags: [Company]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *                 description: The name of the company
 *               address:
 *                 type: string
 *                 description: The address of the company
 *               country:
 *                 type: string
 *                 description: The country where the company is located
 *               postalCode:
 *                 type: string
 *                 description: The postal code of the company
 *               city:
 *                 type: string
 *                 description: The city where the company is located
 *               countryCode:
 *                 type: string
 *                 description: The country code of the company
 *               contactNo:
 *                 type: string
 *                 description: The contact number of the company
 *               webUrl:
 *                 type: string
 *                 description: The website URL of the company
 *               companyLogo:
 *                 type: string
 *                 description: The logo of the company
 *               productDetails:
 *                 type: string
 *                 description: Details about the company's products
 *               teamDetails:
 *                 type: string
 *                 description: Details about the company's team
 *               companyProfile:
 *                 type: string
 *                 description: The company's profile
 *               socialLink:
 *                 type: string
 *                 description: Social media links of the company
 *               vision:
 *                 type: string
 *                 description: The company's vision
 *     responses:
 *       200:
 *         description: Submit details successfully
 *       400:
 *         description: Bad request
 */
router.post('/submit', submitData);

/**
 * @swagger
 * /fetch/{companyName}:
 *   get:
 *     summary: Get company data
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: companyName
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the company to fetch
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of results to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: companyName
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           default: asc
 *         description: Sort order (asc or desc)
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           default: ''
 *         description: Search term
 *     responses:
 *       200:
 *         description: Data fetched successfully
 *       400:
 *         description: Bad request
 */
router.get('/fetch/:companyName', getData);

export { router };
