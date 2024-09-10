import { useState } from "react";

export default function HomeWorthForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [requestSent,setRequestSent] = useState(false);
  const [requestSentError,setRequestSentError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmiting(true)

    try {
      const response = await fetch("/api/submit-home-worth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.data) {
        // Handle success, e.g., show a success message
        alert("Your estimate request has been sent!");
        setFormData({
          fullName: "",
          email: "",
          address: "",
        })
    
        setIsSubmiting(false)
        setRequestSent(true)
        setTimeout(()=>{
          setRequestSent(false)
        }, 3000)
      } else {
        // Handle error
        alert("Something went wrong. Please try again.");
        setIsSubmiting(false)
        setRequestSentError(true)
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
      setIsSubmiting(false)
      setRequestSentError(true)
    }
    setFormData({
      fullName: "",
      email: "",
      address: "",
    })
    setIsSubmiting(false)
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-[#197961]  shadow-3xl rounded-lg">
      <h1 className="text-2xl font-bold mb-2 text-white">How Much Is Your Home Worth?</h1>
      <p className="text-gray-200 mb-6">
        Receive a personalized estimate via e-mail within the next 24hrs
      </p>
      {isSubmiting && <p className="text-gray-200 text-sm mb-6">
        Submitting Request...
      </p>}
      {requestSent && <p className="text-gray-200 text-sm mb-6">
        Your estimate request has been sent!
      </p>}
      {requestSentError && <p className="text-red-500 text-sm mb-6">
        An error occurred. Please try again later.
      </p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-100 mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA72A]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA72A]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA72A]"
          />
        </div>
        <button
          type="submit"
          className="w-full  bg-[#FFA72A] hover:bg-[rgb(194,140,66)] text-white px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#FFA72A]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
