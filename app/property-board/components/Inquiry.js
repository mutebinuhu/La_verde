"use client"
import { databases } from '@/utils/appwrite';
import { checkAuthClient } from '@/utils/auth2';
import { Textarea } from '@nextui-org/react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Inquiry() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const user = await checkAuthClient(router);
            setUser(user);
            console.log('User>>>', user);
          } catch (error) {
            console.error('Authentication failed:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUser();
      }, [router]);
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: async(values) => {
           try {
            console.log("submitted valuse", values)
            const save = await databases.createDocument(
                '67320477003091afb449',
                '67387bc40020fbb914e7',
                'unique()',
                {
                    title: values.title,
                    user_id: user.$id,
                }

            )
           } catch (error) {
            console.log("errors", error)
           }
            

        },
    })

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="flex  w-full ">
     
        <Textarea 
        name='title' 
        onChange={formik.handleChange} 
        value={formik.values.title} 
        type="text"
        placeholder="What Property are you looking for"
        className="w-full px-4 py-2 rounded-l-full text-black focus:outline-none">
        </Textarea>  
  </div>
    <div className='text-center'>
            <button type="submit" className="px-12 py-2  bg-green-800 text-white rounded font-semibold">
                    Submit
            </button>
    </div>
  </form>
  )
}
