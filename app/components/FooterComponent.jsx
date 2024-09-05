import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="relative bg-blue-900 text-white py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[#104E3E] opacity-60" /> {/* Overlay */}

      {/* Footer Content */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
           
                At La Verde Property Management L.L.C, we understand that buying, selling, or renting property is a significant decision in your life. Located in the heart of Abu Dhabi, 
                our dedicated team of experienced professionals is committed to providing exceptional customer service and personalized solutions tailored to your unique needs
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="https://x.com/LaverdeUae" target='_blank' aria-label="Twitter" className="text-white hover:text-gray-300"><FaTwitter /></Link>
            <Link href="https://www.facebook.com/profile.php?id=100093006217955" target='_blank'  aria-label="Facebook" className="text-white hover:text-gray-300"><FaFacebookF /></Link>
            <Link href="https://www.instagram.com/laverde_ae/?fbclid=IwAR10IWl6XE0jkFvkiBMKhDE0DIQpgTQIL0sXodkIooLYMVjZ2vh8dXt6XCg" target='_blank' aria-label="Instagram" className="text-white hover:text-gray-300"><FaInstagram /></Link>
            <Link href="https://www.linkedin.com/in/laverde-property-management-37a9b830b/" target='_blank' aria-label="LinkedIn" className="text-white hover:text-gray-300"><FaLinkedinIn /></Link>
            <Link href="https://www.youtube.com/channel/UCXA-SYTGokZMSWrR17lc4VQ" target='_blank' aria-label="YouTube" className="text-white hover:text-gray-300"><FaYoutube /></Link>
            <Link href="https://www.tiktok.com/@laverde.uae" target='_blank' aria-label="Tiktok" className="text-white hover:text-gray-300"><FaTiktok /></Link>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="text-sm space-y-2">
            <li>Property Management</li>
            <li>Leasing & Sales</li>
            <li>Consultation & Market Research</li>
            <li>Owners' Associations & Unions</li>
            <li>Handover, Maintenance & Inspections</li>
            <li>Project Valuations</li>
            <li>Buying & Selling</li>
          </ul>
        </div>

        {/* Our Properties */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Properties</h3>
          <ul className="text-sm space-y-2">
            <li>Apartments</li>
            <li>Villas</li>
            <li>Office Space</li>
            <li>Warehouses</li>
            <li>Shops</li>
            <li>Staff Accommodations</li>
            <li>Freehold Land</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-4 mb-4">
            <FaPhoneAlt className="text-red-600" />
            <div>
              <p className="text-sm">For Enquiry Call</p>
              <Link href={`tel:+971506144930`} target='_blank' className="font-semibold">+971 2 666 9131</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-red-600" />
            <div>
              <p className="text-sm">Send Us Email</p>
              <Link href={`mailto:info@laverde.ae`} className="font-semibold">info@laverde.ae</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-600" />
            <div>
              <p className="text-sm">Address</p>
              <p className="font-semibold">Office 42, Al Jazeera Towers ,<br />Hamdan Bin Mohammed St  Abu Dhabi UAE</p>
            </div>
          </div>
        </div>
      </div>
      <div>

        <div className='absolute flex justify-center items-center w-full text-white '>
        <div className='md:flex justify-center'>

      <ul className="mx-4 flex justify-between ">
            <li><Link href="/">Home|</Link></li>
            <li><Link href="/about-us">About|</Link></li>
            <li><Link href="#">Services|</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
          </ul>

      </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterComponent;
