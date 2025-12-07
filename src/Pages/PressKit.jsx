import React from "react";

const PressKit = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">📢 Press Kit</h1>

      {/* Brand Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About HomeDecor</h2>
        <p className="text-gray-700 leading-relaxed">
          HomeDecor is a modern lifestyle brand bringing nature indoors with
          elegant plants, eco-friendly products, and stylish decor. Our mission
          is to inspire healthier living by making greenery a part of every home
          and workspace.
        </p>
      </section>

      {/* Logos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Logos & Branding</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-md p-4 text-center">
            <img
              src="https://i.ibb.co.com/5g9ybXM7/output.jpg"
              alt="Primary Logo"
              className="mx-auto h-20"
            />
            <p className="mt-2 text-sm text-gray-600">Primary Logo</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4 text-center">
            <img
              src="https://i.ibb.co.com/0pmR7zZg/output-1.jpg"
              alt="Dark Logo"
              className="mx-auto h-20"
            />
            <p className="mt-2 text-sm text-gray-600">Dark Background Logo</p>
          </div>
          <div className="card bg-base-100 shadow-md p-4 text-center">
            <img
              src="https://i.ibb.co.com/fGNsctDS/output-2.jpg"
              alt="Light Logo"
              className="mx-auto h-20"
            />
            <p className="mt-2 text-sm text-gray-600">Light Background Logo</p>
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Media Assets</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>High-resolution product images</li>
          <li>Brand photography and lifestyle shots</li>
          <li>Press-ready banners and posters</li>
          <li>Company introduction video</li>
        </ul>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Press Contact</h2>
        <p className="text-gray-700">
          📧 Email: <span className="font-medium">press@homedecor.com</span>
        </p>
        <p className="text-gray-700">
          📞 Phone: <span className="font-medium">+880 1234-567890</span>
        </p>
        <p className="text-gray-700">📍 Address: Rangpur, Bangladesh</p>
      </section>
    </div>
  );
};

export default PressKit;
