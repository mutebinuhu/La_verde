import Property from "@/models/Property";

export default async function handler (req, res){
    try {
        const filters = req.query;
        const query = {};

        if (filters.category) query.category = filters.category;
        if (filters.subCategory) query.subCategory = filters.subCategory;
        if (filters.purpose) query.purpose = filters.purpose;
        if (filters.completionStatus) query.completionStatus = filters.completionStatus;
        if (filters.address) query.address = filters.address
        if (filters.minPrice || filters.maxPrice) {
          query.price = {};
          if (filters.minPrice) query.price.$gte = Number(filters.minPrice);
          if (filters.maxPrice) query.price.$lte = Number(filters.maxPrice);
        }
        if (filters.minBedrooms || filters.maxBedrooms) {
          query.bedrooms = {};
          if (filters.minBedrooms) query.bedrooms.$gte = Number(filters.minBedrooms);
          if (filters.maxBedrooms) query.bedrooms.$lte = Number(filters.maxBedrooms);
        }
        if (filters.minBathrooms || filters.maxBathrooms) {
          query.bathrooms = {};
          if (filters.minBathrooms) query.bathrooms.$gte = Number(filters.minBathrooms);
          if (filters.maxBathrooms) query.bathrooms.$lte = Number(filters.maxBathrooms);
        }
        if (filters.minSize || filters.maxSize) {
          query.size = {};
          if (filters.minSize) query.size.$gte = Number(filters.minSize);
          if (filters.maxSize) query.size.$lte = Number(filters.maxSize);
        }
        if (filters.createdBy) query.createdBy = filters.createdBy;
    
        const properties = await Property.find(query);
        res.status(200).json(properties);
      } catch (error) {
        console.log("err========", error)
        res.status(500).json({ error: 'Internal server error' });
      }
}
