import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic (you can send it to a backend or handle it locally)
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-14">
      <h1 className="text-2xl font-bold mb-4 text-[#0077b6]">Contact Us</h1>

      {isSubmitted ? (
        <div className="text-center text-green-500">
          <h2 className="text-xl">Thank you for your message!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <div className="flex gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex-1 max-w-md w-full"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg bg-transparent shadow-sm focus:ring-[#0077b6] focus:border-[#0077b6]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg bg-transparent shadow-sm focus:ring-[#0077b6] focus:border-[#0077b6]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-4 py-2 border rounded-lg bg-transparent shadow-sm focus:ring-[#0077b6] focus:border-[#0077b6]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2 bg-[#0077b6] text-white font-bold rounded-lg hover:bg-[#005f8d] transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Google Map */}
          <div className="flex-1 w-full">
            <h2 className="text-xl font-bold text-[#0077b6]">Our Location</h2>
            <div className="mt-4">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.888808505081!2d144.95743571531843!3d-37.81020757975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d41649399a5%3A0x5056b3b7276f19c2!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1602742452155!5m2!1sen!2sus"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
