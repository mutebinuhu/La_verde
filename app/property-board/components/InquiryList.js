
import { databases, Query } from '@/utils/appwrite';
import React from 'react'
import Post from './Post';

export const metadata = {
    title: 'Collection Items',
  };
  
  async function getDocuments() {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_LA_VERDE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_INQUIRIES_COLLECTION_ID, 
      [
      
        Query.orderDesc('$createdAt'),
      ]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  }
  
export default async function InquiryList() {
  const items = await getDocuments();

  return (
   <>
    <div>InquiryList</div>
   {items && items.map(({title})=><Post title={title} />)} 
   </>
    
  )
}
