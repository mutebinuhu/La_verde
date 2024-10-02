import Navbar from "./Navbar";

// components/BlogList.js
async function fetchData() {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/blog', {
        next: { revalidate: 60*60 } // Revalidate data every 60 seconds
      });
      const data = await res.json();
      console.log("properties*****", data)
      return data;
    } catch (error) {
      console.log("error", error.message)
    }
  }
  
export const  BlogList =  async()=>{
    const data = await fetchData();
    return (
      <div>
        
        <div className="bg-[#104e3e]">
       <Navbar/>
       </div>
       <h1>Blog Posts</h1>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {data.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          data.map((data) => (
            <div key={data._id} className="mb-4">
              <h3 className="text-xl font-bold text-indigo-600">{data.title}</h3>
              <p className="text-gray-700">{data.content}</p>
            </div>
          ))
        )}
      </div>
      </div>
    );
  }
  