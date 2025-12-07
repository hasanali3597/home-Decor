import React from 'react';

const Contact = () => {
    return (
         <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        Have questions or need help? Reach out to us anytime. 
        We’d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4 bg-base-100 shadow-md p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4 bg-base-100 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📍 Our Office</h2>
          <p className="text-gray-600">Rangpur, Bangladesh</p>

          <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
          <p className="text-gray-600">+880 1234-567890</p>

          <h2 className="text-xl font-semibold mb-2">✉️ Email</h2>
          <p className="text-gray-600">support@homedecor.com</p>

          <h2 className="text-xl font-semibold mb-2">🕒 Working Hours</h2>
          <p className="text-gray-600">Sat - Thu: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>

    );
};

export default Contact;