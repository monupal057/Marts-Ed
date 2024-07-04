
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display alert with form data
    alert(`Form data submitted:
    Name: ${formData.name}
    Email: ${formData.email}
    Subject: ${formData.subject}
    Message: ${formData.message}`);

    // Print form data to console
    console.log("Form data submitted: ", formData);

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eee] p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
          Contact Us
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
