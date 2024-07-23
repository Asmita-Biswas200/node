import { Company } from "../models/company.js";
import {companySchema} from '../validators/company.js';

const submitData = async (req, res) => {
 try {
    const { error, value } = companySchema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
          return res.send(JSON.stringify(error.details.map((data) => data.message)));
      } 
    const {
        companyName,
        address,
        country,
        postalCode,
        city,
        countryCode,
        contactNo
      } = req.body;
    
      const savedData = await Company.create({companyName,
        address,
        country,
        postalCode,
        city,
        countryCode,
        contactNo,
        webUrl : req?.body?.webUrl,
        companyLogo : req?.body?.companyLogo,
        productDetails : req?.body?.productDetails,
        teamDetails : req?.body?.teamDetails,
        companyProfile : req?.body?.companyProfile,
        socialLink:  req?.body?.socialLink,
        vision : req?.body?.vision
      });

        if(!savedData){
            return res.status(400).json({err : "Unable to save the data"});
        }
      return res.json({ data: savedData });
 } catch (error) {
    return res.status(400).json({err : error});
 }
};

const getData = async(req, res) => {
  try {
  
    const { companyName } = req.params;
    const limiting = parseInt(req.query.limit) || 0;
    
    await Company.aggregate([
      {
        $sort : {companyName : -1 }
      },
      // { $match : {companyName}},
      {$limit : limiting}
     ])
     .then(response => {
      return res.json({ data: response, msg : "Fetched all data successfully!" });
  })
  .catch(error => {
      res.json({
          message: 'An error occured!'
      })
  })
  } catch (error) {
    return res.status(400).json({err : error});
  }
};

export { submitData, getData };
