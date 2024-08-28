import { useState } from "react";

export default function HomeWorthForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-home-worth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        alert("Your estimate request has been sent!");
      } else {
        // Handle error
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-[#197961] text-white shadow-3xl rounded-lg">
      <h1 className="text-2xl font-bold mb-2">How Much Is Your Home Worth?</h1>
      <p className="text-gray-200 mb-6">
        Receive a personalized estimate via e-mail within the next 24hrs
      </p>
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
