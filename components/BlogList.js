// components/BlogList.js
async function fetchData() {
    const res = await fetch('/api/posts', {
      next: { revalidate: 60 } // Revalidate data every 60 seconds
    });
    const data = await res.json();
    console.log("properties", data)
    return data;
  }
  
export const  BlogList =  async()=>{
    const data = await fetchData();
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
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
    );
  }
  