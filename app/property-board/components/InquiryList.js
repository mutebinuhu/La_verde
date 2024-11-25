import { databases } from '@/utils/appwrite';
import React from 'react'
import Post from './Post';

export const metadata = {
    title: 'Collection Items',
  };
  
  async function getDocuments() {
    try {
      const response = await databases.listDocuments(
        NEXT_PUBLIC_APPWRITE_LA_VERDE_DATABASE_ID,
        NEXT_PUBLIC_APPWRITE_INTENTS_COLLECTION_ID
      );
  
      return response.documents;
    } catch (error) {
      console.error('Error fetching documents:', error);
      return [];
    }
  }
  
export default async function InquiryList() {
    const items = await getDocuments();
    console.log(items);("documents>>>>>>>>>>>>>>>>", items);

  return (
   <>
    <div>InquiryList</div>
   {items && items.map(({title})=><Post title={title}/>)} 
   </>
    
  )
}
