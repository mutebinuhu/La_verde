// pages/api/properties/search.js
import connectToDatabase from '../../../utils/db';
import Property from '../../../models/Property';

export default async function handler(req, res) {
  await connectToDatabase();

  const { query } = req;
  const searchCriteria = { approved: true }; // Ensure only approved properties are returned

  if (query.category) {
    searchCriteria.category = query.category;
  }
  if (query.location) {
    searchCriteria.location = query.location;
  }
  if (query.address) {
    searchCriteria.address = query.address;
  }
  if (query.subCategory) {
    searchCriteria.subCategory = query.subCategory;
  }
  if (query.purpose) {
    searchCriteria.purpose = query.purpose;
  }
  if (query.completionStatus) {
    searchCriteria.completionStatus = query.completionStatus;
  }
  if (query.title) {
    searchCriteria.title = { $regex: query.title, $options: 'i' };
  }
  if (query.minPrice) {
    searchCriteria.price = { $gte: query.minPrice };
  }
  if (query.maxPrice) {
    searchCriteria.price = { ...searchCriteria.price, $lte: query.maxPrice };
  }
  if (query.minBedrooms) {
    searchCriteria.bedrooms = { $gte: query.minBedrooms };
  }
  if (query.maxBedrooms) {
    searchCriteria.bedrooms = { ...searchCriteria.bedrooms, $lte: query.maxBedrooms };
  }
  if (query.minBathrooms) {
    searchCriteria.bathrooms = { $gte: query.minBathrooms };
  }
  if (query.maxBathrooms) {
    searchCriteria.bathrooms = { ...searchCriteria.bathrooms, $lte: query.maxBathrooms };
  }
  if (query.minSize) {
    searchCriteria.size = { $gte: query.minSize };
  }
  if (query.maxSize) {
    searchCriteria.size = { ...searchCriteria.size, $lte: query.maxSize };
  }

  try {
    const properties = await Property.find(searchCriteria);
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
