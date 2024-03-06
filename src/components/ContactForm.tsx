import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full" 
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
