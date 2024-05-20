import Link from "next/link";

const PrivacyPolicy = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. It is La Verde's policy to respect your privacy regarding any information we may collect from you across our website, Laverde.ae, and other sites we own and operate.
        </p>
        <h2 className="text-2xl font-semibold mb-4">1. Information we collect</h2>
        <p className="mb-4">
          We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. How we use information</h2>
        <p className="mb-4">
          We use the information we collect in various ways, including to provide and maintain our services, to improve and personalize our services, to communicate with you, and to protect our users.
        </p>
        <h2 className="text-2xl font-semibold mb-4">3. Sharing information</h2>
        <p className="mb-4">
          We do not share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
        </p>
        <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
        <p className="mb-4">
          We take reasonable steps to protect your personal information from loss, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Contact us</h2>
        <p className="mb-4">
          If you have any questions about our Privacy Policy, please contact us at <Link className="text-decoration text-bold text-blue-500" href={'/contact-us'}>Here</Link>.
        </p>
      </div>
    );
  };
  
  export default PrivacyPolicy;