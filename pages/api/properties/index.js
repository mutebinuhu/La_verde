
   
    import connectToDatabase from '../../../utils/db';
    import Property from '../../../models/Property';
import { image } from '@nextui-org/react';
    const propertiesss = [
        {   id:1,
            bed:2,
            bath:2,
            sqft:400,
            bsr:"buy",
            price:"50000",
            propertyImages:[
                "reportagetower/3848.jpg"
            ],
            name:"Reportage Tower",
            tite:"Reportage Tower",
            location:"Al Maryha Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Reportage Tower, an impressive high-rise residential building located on Al Maryah Island, Abu Dhabi",
                "Reportage Tower is an impressive high-rise residential building located on Al Maryah Island, Abu Dhabi. Offering stunning canal views, it stands on a plot area of 4,361.65 sq.m and reaches a total height of 143.40 meters. The tower features 2 basements, a lower ground level, 2 podiums, an upper ground level, and 36 floors, providing luxurious living spaces and unparalleled vistas",
                "The modern and sustainable facade of Reportage Tower creates a unique and unsurpassed look in the heart of Al Maryah Island, positioning it as one of Abu Dhabi’s most luxurious destinations. Reportage Tower offers contemporary and distinctive high-end residential apartments, providing a complete luxury lifestyle. Located close to Abu Dhabi’s top attractions, the tower is surrounded by promenades, shopping malls, hotels, restaurants, cafes, and a sports center",
                "With 280 residential units and 12 commercial retail spaces, Reportage Tower is designed to meet the highest international standards in terms of design, quality, and space. This prestigious development ensures an unparalleled living experience, combining modern amenities with exceptional proximity to the best of Abu Dhabi"

            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        },
        {   id:2,
            bed:3,
            bath:2,
            sqft:500,
            bsr:"sell",
            propertyImages:[
                "ALDAR_AlReeman2PH3_CGI14_Front_06 (2).jpg"
            ],
            price:"50000",
            title:"Fay AlReeman",
            name:"Fay AlReeman",
            location:"Al Maryha Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Experience luxury living at Fay Al Reeman, where modern design meets comfort and convenience.",
                "Experience luxury living at Fay Al Reeman, where modern design meets comfort and convenience. Nestled in a vibrant community, this stunning property offers spacious interiors, top-notch amenities, and beautifully landscaped surroundings. Perfect for families and professionals alike, Fay Al Reeman promises an exceptional lifestyle in a prime location. Discover your dream home today",
                
            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        },
        {   id:3,
            bed:2,
            bath:2,
            sqft:400,
            bsr:"buy",
            price:"50000",
            propertyImages:[
                "ALDAR_GardeniaIB2_CGI22_Amenities_02_10K (2).jpg"
            ],
            title:"Gardenia Bay",
            name:"Gardenia Bay",
            location:"Al Maryha Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Welcome to Gardenia Bay, a serene waterfront haven offering the perfect blend of luxury and tranquility",
                "Welcome to Gardenia Bay, a serene waterfront haven offering the perfect blend of luxury and tranquility. Set amidst lush greenery and scenic views, this exquisite property features elegantly designed residences with premium amenities. Ideal for those seeking a peaceful retreat, Gardenia Bay provides a harmonious living experience with seamless access to urban conveniences. Discover your oasis at Gardenia Bay today.",
                "The modern and sustainable facade of Reportage Tower creates a unique and unsurpassed look in the heart of Al Maryah Island, positioning it as one of Abu Dhabi’s most luxurious destinations. Reportage Tower offers contemporary and distinctive high-end residential apartments, providing a complete luxury lifestyle. Located close to Abu Dhabi’s top attractions, the tower is surrounded by promenades, shopping malls, hotels, restaurants, cafes, and a sports center",
                "With 280 residential units and 12 commercial retail spaces, Reportage Tower is designed to meet the highest international standards in terms of design, quality, and space. This prestigious development ensures an unparalleled living experience, combining modern amenities with exceptional proximity to the best of Abu Dhabi"

            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        },
        {   id:4,
            bed:3,
            bath:2,
            sqft:500,
            bsr:"sell",
            propertyImages:[
                "ALD2607_SaadiyatLagoons_M380_EXT_Playground.jpg"
            ],
            price:"50000",
            tite:"Reportage Tower",
            name:"Saadiyat Lagoons",
            location:"Al Maryha Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Discover the epitome of island living at Saadiyat Lagoons. Nestled within the breathtaking Saadiyat Island",
                "Discover the epitome of island living at Saadiyat Lagoons. Nestled within the breathtaking Saadiyat Island, this exclusive property boasts lush landscapes, serene lagoons, and contemporary residences designed for luxury and comfort. Enjoy unparalleled amenities, scenic walking trails, and a vibrant community atmosphere. Experience the perfect blend of nature and sophistication at Saadiyat Lagoons. Make it your sanctuary today.",  
            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        },
        {   id:5,
            bed:2,
            bath:2,
            sqft:400,
            bsr:"buy",
            price:"50000",
            propertyImages:[
                "samaAM12_Restaurant_B9.jpg"
            ],
            tite:"Sama Yas",
            name:"Sama Yas",
            location:"Yas  Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Introducing Sama Yas, a prestigious development offering a blend of modern elegance and serene living",
                "Introducing Sama Yas, a prestigious development offering a blend of modern elegance and serene living. Located in the heart of a thriving community, Sama Yas features stylish residences with cutting-edge amenities and breathtaking views. Enjoy a lifestyle of convenience and luxury, with close proximity to top-tier shopping, dining, and recreational facilities. Elevate your living experience at Sama Yas. Discover your ideal home today."
            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        },
        {   id:6,
            bed:3,
            bath:2,
            sqft:500,
            bsr:"sell",
            propertyImages:[
                "YGC_2 (2).jpg"
            ],
            price:"50000",
            title:"Yas Golf Course",
            name:"Yas Golf Course",
            location:"Al Maryha Island",
            subHead1:"5 mins walking distance to Galleria Al Maryah, Rosewood Abu Dhabi and Cleveland Clinic Abu Dhabi",
            subHead2:"5 mins driving distance to Four Seasons Hotel , Al Reem Island,Beach Rotana Hotel, Abu Dhabi Mall and ACTIVE Al Maryah Sports Centre",
            mainCallToActionText:"Contact Us For Availability",
            type:"tower",
            totalUnits:"292",
            totalUnitsBreakDown:[
                {
                    id:1,
                    name:"Three Bedrooms Duplex	",
                    type:"Apartment	",
                    count:"197"
                },
                {
                    id:2,
                    name:"Four Bedrooms Duplex",
                    type:"Penthouse	",
                    count:"11"
                },
                {
                    id:3,
                    name:"Two Bedrooms Simplex",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:4,
                    name:"Ground Retails Simple",
                    type:"Apartment	",
                    count:"66"
                },
                {
                    id:5,
                    name:"Four Bedrooms Triplex	",
                    type:"Townhouse",
                    count:"04"
                },
                {
                    id:6,
                    name:"Five Bedrooms Triplex		",
                    type:"Townhouse",
                    count:"02"
                }
            ],
            about:[
                "Welcome to Yas Golf Course, where luxury living meets the greens. Situated alongside the world-renowned Yas Links Golf Course",
                "Welcome to Yas Golf Course, where luxury living meets the greens. Situated alongside the world-renowned Yas Links Golf Course, this premium property offers stunning views and unmatched access to golfing excellence. Enjoy elegant, contemporary residences with exclusive amenities, all within a vibrant community known for its entertainment, dining, and leisure options. Embrace the perfect balance of sophistication and sport at Yas Golf Course. Find your dream home here today.",
            ],
    
            buildingFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Promenade"
                },
                {
                    icon:"CiShop",
                    text:"Retail shops in Upper Ground floor"
                },
                {
                    icon:"IoIosCafe",
                    text:"Restaurants & Cafes in Promenade Level"
                },
                {
                    icon:"FaSquareParking",
                    text:"Private Parking for each unit"
                },
                {
                    icon:"CiParking1",
                    text:"442 Covered Plot Parking"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Large Swimming Pool"
                },
                {
                    icon:"TbGymnastics",
                    text:"Gymnasium"
                },
                {
                    icon:"FaWater",
                    text:"Water Features"
                },
                {
                    icon:"MdWbShade",
                    text:"Shaded Seating Areas"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Landscape Areas"
                },
                {
                    icon:"PiLadderSimple",
                    text:"4 Large Elevators"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Service Elevator" 
                }
            ],
            unitFeatures:[
                {
                    icon:"PiRoadHorizonLight",
                    text:"Access to Al Maryah Private Balconies /\ Terraces as per unit plan "
                },
                {
                    icon:"CiShop",
                    text:"guest toilets wherever applicable"
                },
                {
                    icon:"IoIosCafe",
                    text:"Shower in each bathroom"
                },
                {
                    icon:"FaSquareParking",
                    text:"Some bedrooms with private bathroom"
                },
                {
                    icon:"CiParking1",
                    text:"Private Parking for Townhouses"
                },
                {
                    icon:"LiaSwimmerSolid",
                    text:"Kitchen cabinets and countertops"
                },
                {
                    icon:"TbGymnastics",
                    text:"Double glazed windows"
                },
                {
                    icon:"FaWater",
                    text:"Central air conditioning"
                },
                {
                    icon:"MdWbShade",
                    text:"Satellite master antenna"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"Fully tiled bathrooms, in-suites"
                },
                {
                    icon:"PiLadderSimple",
                    text:"Built-in wardrobes in bedrooms"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"Vanity units & Mirrors" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"fibre optic connection for high-speed internet access" 
                }
            ],
            locationFeatures:[
                {
                    icon:"FaWater",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre"
                },
                {
                    icon:"MdWbShade",
                    text:"03 minutes driving to Four Seasons Hotel"
                },
                {
                    icon:"BiSolidLandscape",
                    text:"05 minutes walking to The Galleria Al Maryah"
                },
                {
                    icon:"PiLadderSimple",
                    text:"07 minutes walking to Rosewood Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Al Reem Island" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Abu Dhabi Mall" 
                } ,
                {
                    icon:"PiLadderSimple",
                    text:"09 minutes walking to Cleveland Clinic Abu Dhabi"
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to Beach Rotana Hotel" 
                },
                {
                    icon:"PiLadderSimpleBold",
                    text:"05 minutes driving to ACTIVE Al Maryah Sports Centre" 
                } 
            ]


        }
        
    ]

    
    export default async function handler(req, res) {
      await connectToDatabase();
    
      const { method } = req;
    
      switch (method) {
        case 'GET':
          try {
            const properties = await Property.find({})
            res.status(200).json({ success: true, data: properties });
          } catch (error) {
            res.status(400).json({ success: false });
          }
          break;
        case 'POST':
          try {

            const newProperty = new Property(req.body);
         

            console.log("features type", typeof(req.body.amenities), "------", req.body.amenities);
            console.log("images type", typeof(req.body.images), "--------", req.body.images);
            let property = await newProperty.save();
            console.log("PROP----", property)

           return res.status(201).json({ success: true, data: property });
          } catch (error) {
        
            return res.status(400).json({ success: false, "err":error.message });
          }
          break;
        default:
          res.setHeader('Allow', ['GET', 'POST']);
          res.status(405).end(`Method ${method} Not Allowed`);
      }
    }