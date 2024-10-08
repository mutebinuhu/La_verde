const mongoose = require('mongoose');
const { string } = require('yup');

const propertySchema = new mongoose.Schema({
  category:{
    type: String,
    //required:true,
    enum:['residential', 'commercial'],
  },
  project:{
    type:Boolean,
    default:false
  },
  upComingDate:{
    type: Date,
    //required: true
  },
  projectLocation:{
    type:String 
  },
  subCategory:{
    type: String,
    required:true,
    enum:['villa','project','studio', 'apartment', 'residentialFloor', 'residentialPlot', 'townHouse', 'residentialBuilding', 'pentHouse', 'villaCompound']
  },
  status:{
    type:String,
    enum:['vacant', 'occupied', 'upComing']
  },
  purpose:{
    type: String,
    //required: true,
    enum:['sale', 'rent']
  },
  completionStatus:{
    type: String,
    //required: true,
    enum:['offPlanPrimary', 'offPlanSecondly', 'readyPrimary', 'readySecondary']
  },
  title:{
    type: String,
    required: true
  },
  slug:{
    type: String
  },
  location:{
    type: String
  },
  areaSquare:{
    type: Number,
    //required: true
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
    //required: true
  },
  bedrooms: {
    type: Number,
    //required: true
  },
  bathrooms: {
    type: Number,
    //required: true
  },
  isFeatured:{
    type: Boolean,
    default:false
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
    type: [String], // Array of image URLs
    default: []
  },
  amenities: {
    type: [String], // Array of features and amenities
    default: []
  },
  coverImage:{
    type: String, // URL of the cover image
    required: false
  },
  availability:{
    type:Date
   
  },
  handover:{
    type: String
  },
  //data for new projects
  unitsLeft:{
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
    type:[String],
    default: []
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
    type:Number
  },
  lon:{
    type:Number
  },
  sqftFrom:{
    type:Number
  },
  sqftTo:{
    type:Number
  },
   sqMtFrom:{
    type:Number
  },
  sqMtTo:{
    type:Number
  },
  nearByPlaces:{
   type:[String],
   default: []
 
  },
  priceNotes:{
    type:String
  },
  notes:{
    type:[String],
    default: []
  },
 noOfPayments:{
  type:Number
 },
 //the external souce from an integrator
 source:{
  type:String,
  default:"main"
 },
 //the external source unique id from an integrator
 sourceUniqueId:{
   type:Number,
  default:0
 },
 imported:{
  type:Boolean,
  default:false
 }
}, 
{
  timestamps: true
}
);



const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

module.exports = Property;


