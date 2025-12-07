import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-700 leading-relaxed text-center mb-8">
        Welcome to{" "}
        <span className="font-semibold text-indigo-600">HomeDecor</span>, your
        trusted destination for elegant and eco-friendly indoor plants. We
        believe in creating homes filled with freshness, beauty, and natural
        vibes. Our mission is to provide high-quality plants that not only
        decorate your space but also purify the air and bring positivity to your
        lifestyle.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">🌱 Our Vision</h2>
          <p className="text-gray-600">
            To inspire healthier living by making plants a part of every home
            and workspace.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">🤝 Our Values</h2>
          <p className="text-gray-600">
            We value sustainability, customer satisfaction, and spreading
            greenery with love and care.
          </p>
        </div>

        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">🌍 Our Promise</h2>
          <p className="text-gray-600">
            Delivering eco-friendly products with reliable service, ensuring
            every plant finds its perfect home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
