const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  category:{
    type: String,
    required:true,
    enum:['residential', 'commercial'],
  },
  subCategory:{
    type: String,
    required:true,
    enum:['villa', 'studio', 'apartment', 'residentialFloor', 'residentialPlot', 'townHouse', 'residentialBuilding', 'pentHouse', 'villaCompound']
  },
  purpose:{
    type: String,
    required: true,
    enum:['sale', 'rent']
  },
  completionStatus:{
    type: String,
    required: true,
    enum:['offPlanPrimary', 'offPlanSecondly', 'readyPrimary', 'readySecondary']
  },
  title:{
    type: String,
    required: true
  },
  location:{
    type: String
  },
  areaSquare:{
    type: Number,
    required: true
  },
  createdBy:{
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  
  descriptionEnglish: {
    type: String,
    required: true
  },
  descriptionArabic: {
    type: String,
    required: true
  },
  images: {
    type: [String] // Array of image URLs
  },
  amenities: {
    type: [String] // Array of features and amenities
  },
  
  availability:{
    type:[Date]
  },
  //data for new projects
  /*unitsLeft:{
    type:Number
  },
  startSellDate:{
    type:Date
  },
  noOfBedroomsStart:{
    type:Number
  },
  noOfBedroomsEnd:{
    type:Number
  },

  approved:{
    type: Boolean,
    default: false
  },
  paymentPlan:{
    type:[String]
  },
  lifeStyle:{
    type:String
  },
  startingPrice:{
    type:Number
  },
  developerName:{
    type:String
  },
  lat:{
    type:Double
  },
  lon:{
    type:Double
  },
  sqftFrom:{
    type:Double
  },
  sqftTo:{
    type:Double
  },
  nearByPlaces:{
   type:[Array] 
  },
  priceNotes:{
    type:String
  },
  notes:{
    type:[String]
  }
  */
 noOfPayments:{
  type:String
 }
}, 
{
  timestamps: true
}
);



const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

module.exports = Property;


