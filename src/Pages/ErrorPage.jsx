import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-gradient-x">
  <div className="text-yellow-500 text-7xl mb-4">⚠️</div>

  <img
    src="https://cdn-icons-png.flaticon.com/512/748/748122.png"
    alt="Error Illustration"
    className="w-40 h-40 mb-6"
  />

  <h1 className="text-6xl font-bold text-red-500">404</h1>
  <h2 className="text-2xl font-semibold mt-2 text-black">Page Not Found</h2>
  <p className="text-gray-700 mt-2">
    Sorry, the page you are looking for does not exist.
  </p>

  <a
    href="/"
    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
  >
    ⬅ Go Back Home
  </a>
</div>
  );
};

export default ErrorPage;
