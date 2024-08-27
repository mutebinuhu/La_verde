import PropertyDetailsBeta from '@/components/PropertyDetailsBeta';
import dbConnect from '../../../utils/db';
import Property from '@/models/Property';
import { notFound } from 'next/navigation';
import ProjectDetailsBeta from '@/components/ProjectDetailsBeta';

export default async function PropertyPage({ params }) {
  const { title } = params;

const decodedTitle = decodeURIComponent(title);

  await dbConnect();

  const property = await Property.findOne({ title:decodedTitle });

  if (!property) {
    notFound();
  }

  return (
    <div>
      <ProjectDetailsBeta propertyId={property._id}/>
    </div>
  );
}