"use client"
import axios from 'axios';
import React, {useState} from 'react';
const ImageList = ({ propertyId, images }) => {
    const [coverImage, setCoverImage] = useState(null);
  
    const handleSetCoverImage = async (imageUrl) => {
      try {
        let res = await axios.put('/api/properties/update-cover-picture', {
          propertyId,
          coverImageUrl: imageUrl,
        });
        setCoverImage(imageUrl);
        console.log("res++++++",res);
      } catch (error) {
        console.error('Error setting cover image:', error);
      }
    };
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div key={index} className="relative">
            <img
              src={url}
              alt={`Property ${index}`}
              className={`w-full h-36 object-cover rounded ${coverImage === url ? 'border-4 border-blue-500' : ''}`}
            />
            <button
              onClick={() => handleSetCoverImage(url)}
              className={`absolute text-sm top-2 right-2 bg-blue-500 text-white p-0.5 rounded ${coverImage === url ? 'hidden' : ''}`}
            >
              Set as Cover
            </button>
            {coverImage === url && (
              <span className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded">Cover Photo</span>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default ImageList;