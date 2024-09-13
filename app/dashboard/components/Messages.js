import React from 'react'

export default function Messages({messages}) {


// Format the date in a readable format (e.g., 'YYYY-MM-DD HH:MM:SS')
const formattedDate = (date) => {
    
    const dateObj = new Date(date);
    return dateObj.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // 24-hour format
      })
      
};
    console.log("info", messages)
  return (
   
      <div className="overflow-y-auto h-[630px] bg-white shadow-md p-4 border border-gray-200 rounded-md">
        <div className='border-b w-full my-4'>
            <h2 className='p-4 font-bold'>Messages</h2>
        </div>
     <ul role="list" class="divide-y divide-slate-200  ">
    
    {messages && messages.slice(0,10).map((message, index) =>{
       return (
           <li class="flex py-4 first:pt-0 last:pb-0 relative" key={index}>
               <img class="h-10 w-10 rounded-full" src={`https://avatar.iran.liara.run/username?username=${[message.name]}`} alt="" />
               <div class="ml-3 overflow-hidden">
               <p class="text-sm font-medium text-slate-900">{message.name}</p>
               <p class="text-sm text-slate-500 truncate mb-3">{message.email}</p>
            
               <p class="text-xs absolute right-0 text-slate-900 text-right truncate  bg-gray-100 p-1 rounded-lg">{formattedDate(message.createdAt)}</p>

               </div>
              
           </li>
       )
    })}
  
 </ul>
 </div>

  )
}
