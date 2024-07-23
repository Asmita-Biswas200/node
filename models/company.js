import mongoose, { Schema } from 'mongoose';

const teamSchema = new mongoose.Schema({
    memberName: {
      type: String,
      required: false,
    } ,
    memberDesc : {
        type: String,
        required: false,
    },
    summary : {
        type: String,
        required: false,
    }
  });

  const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        require : false
    },
    productDesc : {
        type : String,
        require : false
    },
    link : {
        type : String,
        require : false
    }
  })

const comapanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  webUrl: {
    type: String,
    required: false,
  },
  companyLogo: {
    type: String,
    required: false,
  },
  companyProfile : {
    type: String,
    required: false,
  },
  socialLink :{
    type: String,
    required: false,
  },
  vision : {
    type: String,
    required: false,
  },
  teamDetails : {
    type : [teamSchema],
    required : false
  },
  productDetails : {
    type : [productSchema],
    required : false
  }
});

const Company = mongoose.model('Company', comapanySchema);
export { Company };
