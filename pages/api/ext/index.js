import Property from "@/models/Property";

  export default async function handler(req, res) {

  
    const { method } = req;


    switch (method) {
      case 'GET':
          try {
            const data = await fetch("https://api-v2.mycrm.com/properties?per_page=10", {
                method: 'GET',
                headers:{
                  'Content-Type':'application/json',
                  "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJIYzY0Z2lpMHpxYzUwRXNrMjFPZ3ExTkdQQUVuRmZOWEN1akdsc1BkdnYwIn0.eyJleHAiOjE3MjIwODYyOTQsImlhdCI6MTcyMjA4NDQ5NCwianRpIjoiOGQzNmM2OGUtNmQ0Yy00NTE1LTk1OTUtNzVkNjJlNzg2ZWI4IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnByb3BlcnR5ZmluZGVyLmNvbS9icm9rZXIvcmVhbG1zL3Byb3BlcnR5ZmluZGVyIiwiYXVkIjoiYXBpLWludGVncmF0aW9uIiwic3ViIjoiMGQxM2MwNzEtYzFmOS00ZGVmLWFjZWEtOTgyMTM2ZmE0MTNkIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBpLWludGVncmF0aW9uIiwic2Vzc2lvbl9zdGF0ZSI6IjU1MjNmYWVlLTZhOTAtNGZhNC1hZTZlLTI2NjY5NTQ5YmIwYiIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ2Mi5uZXdfcHJvamVjdHMubWFuYWdlIiwidjIudHJhbnNhY3Rpb25zLm1hbmFnZSIsInYyLmxpc3RpbmcucHJldmlldyIsInByb3BlcnR5LnB1Ymxpc2giLCJ2Mi5jcmVkaXRfdXNhZ2VfaGlzdG9yeS52aWV3IiwicHJvcGVydHkudXBkYXRlIiwibGFuZGxvcmQucmVhZC5vdGhlci5hdHRyaWJ1dGVzIiwidjIuY29tcGFueV93YXRlcm1hcmsubWFuYWdlIiwiYWdlbnQucmVhZCIsInYyLnVzZXJfcHJvZmlsZS51cGRhdGUiLCJmbG9vcl9wbGFuLmRlbGV0ZSIsInByb2ZpbGUudXBkYXRlIiwidjIudXNlcl9ub3RpZmljYXRpb25fcHJlZmVyZW5jZS51cGRhdGUiLCJ2Mi5yZWd1bGFyX2xlYWRzLmRlbGV0ZSIsInVtYV9hdXRob3JpemF0aW9uIiwidjIub3duZXJzLm1hbmFnZSIsImxhbmRsb3JkLnVwZGF0ZS5vdGhlciIsInYyLmxpc3RpbmcuYXV0b19yZW5ldyIsInYyLnZhdF9kb2N1bWVudC52aWV3IiwidjIuY3JlZGl0X3VzYWdlX2hpc3RvcnkuZXhwb3J0IiwicHJvcGVydHkudXBkYXRlLm90aGVyIiwidjIudXNlcl92ZXJpZmljYXRpb24ubWFuYWdlIiwidjIuYWdlbnRfaW5zaWdodHMudmlldyIsInYyLmxpc3RpbmcudXBncmFkZV90b19mZWF0dXJlZCIsInYyLmNvbnRyYWN0c19pbnZvaWNlcy52aWV3IiwibGFuZGxvcmQuZGVsZXRlIiwiY2xpZW50LnJlYWQiLCJsZWFkLnVwZGF0ZSIsInByb3BlcnR5LmRlbGV0ZS5vdGhlciIsImNsaWVudC5yZXNldCIsInYyLmN1c3RvbV9yb2xlcy5tYW5hZ2UiLCJ2Mi5zdGF0dXMudmlldyIsImZsb29yX3BsYW4ucmVhZCIsInYyLnVzZXIuY3JlYXRlIiwidXNlci5yZWFkIiwiZmxvb3JfcGxhbi51cGxvYWQiLCJ2Mi5jcmVkaXRzX3RvX3RlYW1zLm1hbmFnZSIsInYyLnRyYW5zYWN0aW9ucy52aWV3IiwiY2xpZW50LmFkZCIsInYyLnNpbmdsZV9hZ2VudF9pbnNpZ2h0cy52aWV3IiwidjIucmVndWxhcl9sZWFkcy5tYW5hZ2UiLCJsZWFkLmRlbGV0ZSIsInVzZXIuY2hhbmdlX3JvbGUiLCJ1c2VyLnVwZGF0ZSIsInYyLmNyZWRpdF9jYWxjdWxhdG9yLnZpZXciLCJ2Mi5jdHNfbGFuZGluZ19wYWdlLnZpZXciLCJ2Mi5saXN0aW5nLnNwb3RsaWdodCIsImxlYWQucmVhZC5vdGhlciIsInYyLmxpc3RpbmdfcGVyZm9ybWFuY2VfZGFzaGJvYXJkLnZpZXciLCJ2Mi5yZWd1bGFyX2xlYWRzLmV4cG9ydCIsImRlZmF1bHQtcm9sZXMtcGZleHBlcnQiLCJsYW5kbG9yZC5yZWFkLm90aGVyIiwicHJvcGVydHkucmVhZC5vdGhlci5hdHRyaWJ1dGVzIiwidjIubGlzdGluZy5hcHByb3ZlX3JlamVjdCIsImxhbmRsb3JkLnVwZGF0ZSIsInYyLmNhbGxfbGVhZHMudmlldyIsImNsaWVudC51cGRhdGUiLCJ2Mi5saXN0aW5nLmRvd25ncmFkZSIsInYyLmxpc3RpbmcuY3JlYXRlIiwicHJvZmlsZS5yZWFkIiwicHJvcGVydHkucmVhZCIsInYyLmNvbnRyYWN0c19pbnZvaWNlcy5tYW5hZ2UiLCJwcm9wZXJ0eS5kZWxldGUiLCJ2Mi5saXN0aW5nLnZpZXciLCJ2Mi5vd25lcnMudmlldyIsImxlYWQuZGVsZXRlLm90aGVyIiwidjIucGFydG5lcl9wcm9ncmFtLnZpZXciLCJsYW5kbG9yZC5yZWFkIiwidjIubGlzdGluZy51bnB1Ymxpc2giLCJ2Mi5wZl9hY2FkZW15LnZpZXciLCJ1c2VyLmRlbGV0ZSIsInYyLnVzZXJzX2xpc3QudmlldyIsInYyLmNsaWVudF9wcm9maWxlLnZpZXciLCJsZWFkLnJlYWQub3RoZXIuYXR0cmlidXRlcyIsInYyLmxpc3RpbmcuY2xhaW1fdHJhbnNhY3Rpb24iLCJ2Mi5saXN0aW5nLmFyY2hpdmUiLCJ2Mi5wZXJtaXNzaW9ucy52aWV3IiwiZGFzaGJvYXJkLnJlYWQiLCJ2Mi53aGF0c2FwcF9sZWFkcy52aWV3IiwiY2xpZW50LmRlbGV0ZSIsInByb3BlcnR5LmFwcHJvdmUub3RoZXIiLCJ2Mi51c2VyX3Byb2ZpbGUudmlldyIsInYyLmxpc3RpbmcudXBncmFkZV90b19wcmVtaXVtIiwiY2xpZW50LmltcG9ydCIsImxlYWQucmVhZCIsInYyLmxlYWRzX2luc2lnaHRzLnZpZXciLCJ2Mi5yZWd1bGFyX2xlYWRzLnZpZXciLCJ2Mi5saXN0aW5nLmFzc2lnbiIsInYyLmxpc3RpbmdzX2FjdGlvbl90cmFja2VyLm1hbmFnZSIsInYyLmxpc3RpbmcudXBkYXRlX2RldGFpbHMiLCJhZ2VudC51cGRhdGUiLCJ2Mi5wb3J0YWxzLm1hbmFnZSIsInByb3BlcnR5LnB1Ymxpc2gub3RoZXIiLCJvZmZsaW5lX2FjY2VzcyIsInYyLmFjdGl2aXR5X2xvZy52aWV3IiwidjIudXNlcl9kb2N1bWVudHMubWFuYWdlIiwidjIubGlzdGluZy5kZWxldGUiLCJ2Mi5wZl9hY2FkZW15Lm1hbmFnZSIsInYyLmNyZWRpdHNfdG9fYWdlbnRzLm1hbmFnZSIsInYyLmNyZWRpdF9yZXR1cm4uY3JlYXRlIiwidjIuY3JlZGl0X3RvcHVwLmNyZWF0ZSIsInYyLmxpc3RpbmcucHVibGlzaCIsInYyLmhvbGlkYXlfbW9kZS5tYW5hZ2UiLCJ2Mi5saXN0aW5nc19hY3Rpb25fdHJhY2tlci52aWV3IiwibGVhZC51cGRhdGUub3RoZXIiLCJjbGllbnQuZGVhY3RpdmF0ZSIsInYyLnVzZXIuZGVsZXRlIiwiY2xpZW50LmZpbGVfaW1wb3J0IiwidXNlci5hZGQiLCJwcm9wZXJ0eS5yZWFkLm90aGVyIiwidjIubGlzdGluZy52aWV3X29wdGlvbnMiLCJjbGllbnQucG9ydGFsX2FjdGl2YXRpb24iLCJwcm9wZXJ0eS5hcHByb3ZlIiwibGFuZGxvcmQuZGVsZXRlLm90aGVyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJhcGlfaW50ZWdyYXRpb24iLCJzaWQiOiI1NTIzZmFlZS02YTkwLTRmYTQtYWU2ZS0yNjY2OTU0OWJiMGIiLCJwZl9icm9rZXJfaWQiOiI2NzIyIiwiYXBwbGljYXRpb25JZCI6InA5c2EybmN5d2QxdmVya3pqbDc0eDB1aDgzdHEiLCJjbGllbnRfaWQiOiI4MzQ5IiwiZW1haWwiOiJhcGlfaW50ZWdyYXRpb25fODM0OUBwcm9wZXJ0eWZpbmRlci5jb20ifQ.BXTdg_Pz4y8nH13XFRiT_bdXtfnTuwekgXGbunFJj2l7NSo8o3xYKBN17wYT4NWLVonopHtgwLVWDxS02RAqT769uFpoBItBJbT2vt29PIvu0-2tU1BEQ0A9R6mLIKC2K7VycvuWRb1pBJZuSpB2gCDU9KuBgcdKH_4QGfDx8Zjxg3k1JAKwN4_5dFSU9o4EIwyozq-lCkXQmMo_BhXSUNgL8sCsoQKAHb5L9ZckU380sgiSXSnuiVcB_rT5Pnt_HlLeG1rcRdUa65V_kpWH8HCn4fgwe7xgt3e81kNshEesp3al_cPzQI7AS1MUHuP235egG8he4oFBDYaqBG6sEw"
                }
              })
              const responseData = await data.json()
              //return res.json({data:responseData})
              //console.log("responseData", responseData.properties)

              const ourDbPropertiesRes = await fetch("http://localhost:3000/api/properties")
              const ourDbPropertiesResData = await ourDbPropertiesRes.json()
              //console.log("response-----------------------",  ourDbPropertiesResData )
              let propertyIds = responseData.properties.map((data)=>data.id)
             // console.log("onlypropertyIds", propertyIds)
              let cleanedData = responseData.properties.map((data)=>{
                //console.log("data", data)
                const {id, location, size,bedrooms, bathrooms, status, type, price, languages,images,available_from } = data
                const pattern = /✅\s+(.*?)(?=\n|$)/g;

                let amenities = [...languages][0].description
                  // Find all matches
                  const matches = [];
                  let match;
                  if(amenities){
                    while ((match = pattern.exec(amenities)) !== null) {
                    matches.push(match[1].trim());
                  }
                  }


                                  // Regex pattern to find all items starting with any checkbox emoji followed by text
                    const pattern2 = /✔️.*?\n/g;

                    // Replace all matches with an empty string
                    let text = [...languages][0].description
                    const cleanedText = text.replace(pattern2, '');

                    //console.log("cleanedppppppppppppppppppppppppppp",cleanedText);
                

                  //console.log(("matches============"))
                const cleanedData = {
                    propertId:id,
                    title: `${bedrooms ? `${bedrooms} ${bedrooms <= 1 ? 'bedroom' :'bedrooms'}` : ''} Available for ${price.offering_type}${location.community || location.address ? ` in ${location.community || ''}${location.sub_community ? ' | ' + location.sub_community : ''}` : ''}`,

                    location:location.community,
                    bedrooms:bedrooms,
                    bathrooms:bathrooms,
                    status:status,
                    type:type.category,
                    price:price.offering_value,
                    descriptionEnglish:cleanedText,
                    images:images.map((image)=>image.thumb.link),
                    subCategory:type.category.name,
                    status:status,
                    purpose:price.offering_type,
                    completionStatus:"readyPrimary",
                    areaSquare:size,
                    createdBy:"propertyFinder",
                    address:location.community + "|" + location.sub_community,
                    bathrooms:bathrooms ? bathrooms : 0,  
                    descriptionArabic:[...languages][0].description,
                    amenities:matches,
                    availability:available_from,
                    noOfPayments:"",
                    source:"properyfinder",
                    sourceUniqueId:id,
                    imported:true
                }
                ///console.log("languages", languages[0])
             

               return cleanedData
              })
              res.status(200).json({ success: true, data: cleanedData });
          } catch (error) {
            console.log("err", error.message)
            res.status(400).json({ success: false });
          }
          break;
        
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }