import React from "react";

const Spinner = ({ count = 6 }) => {
  return (
    <div className="grid text-center md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((__, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 w-full mx-auto rounded-xl border border-gray-200 p-4 shadow-sm"
        >
          <div className="skeleton h-48 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Spinner;