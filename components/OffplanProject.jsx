import CampaignBanner from './CampaignBanner';

const OffplanProject =()=>{
  return (
    <div>
      <CampaignBanner/>
      <section className="container mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Invest in Our Off-Plan Projects</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the benefits of investing in our exclusive off-plan properties. Secure your future home or investment with flexible payment plans and premium amenities.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
            Explore Projects
          </button>
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Project Description</h2>
          <p className="mt-4">
            Our off-plan projects offer a variety of modern living spaces designed to meet the needs of contemporary lifestyles. Each project features high-quality finishes, state-of-the-art amenities, and is situated in prime locations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Amenities</h2>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Swimming Pool</li>
            <li>Gym & Fitness Center</li>
            <li>24/7 Security</li>
            <li>Landscaped Gardens</li>
            <li>Children's Play Area</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Gallery</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/10.jpg" alt="Gallery 1" className="w-full h-auto rounded" />
            <img src="/11.jpg" alt="Gallery 2" className="w-full h-auto rounded" />
            <img src="/MASTER BATHROOM.jpg" alt="Gallery 3" className="w-full h-auto rounded" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-bold">Payment Plans</h2>
          <p className="mt-4">
            We offer flexible payment plans to suit your needs. Contact us today to learn more about our financing options and how you can secure your dream property.
          </p>
          <button className="mt-6 px-8 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default OffplanProject;
