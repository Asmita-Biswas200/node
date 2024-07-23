import Joi from 'joi';

const companySchema = Joi.object({
  companyName: Joi.string().required(),
  address: Joi.string().max(50).required(),
  country: Joi.string().max(20).required(),
  postalCode: Joi.string().min(6).max(6).required(),
  city: Joi.string().required(),
  countryCode: Joi.string().max(7).required(),
  contactNo: Joi.string().length(10).required(),
  webUrl: Joi.string(),
  companyLogo: Joi.string(),

  companyProfile : Joi.string().max(200).required(),
  socialLink: Joi.string(),
  vision : Joi.string().max(200),

  productDetails: Joi.array().items({
    productName: Joi.string(),
    productDesc: Joi.string(),
    link: Joi.string()
  }),
  teamDetails : Joi.array().items({
    memberName: Joi.string(),
    memberDesc: Joi.string(),
    summary: Joi.string()
  }),
});

export { companySchema };
