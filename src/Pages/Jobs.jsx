import React from "react";

const Jobs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">💼 Latest Jobs</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Card 1 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
          <p className="text-gray-600">TechSoft Ltd.</p>
          <p className="text-sm text-indigo-600">Dhaka, Bangladesh</p>
          <p className="text-sm font-medium">Full-time</p>
          <p className="text-sm text-gray-500">Salary: 40,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Skilled React developer with Tailwind CSS experience. Build modern
            UI and collaborate with design team.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>

        {/* Job Card 2 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Backend Engineer</h2>
          <p className="text-gray-600">CloudWorks</p>
          <p className="text-sm text-indigo-600">Rangpur, Bangladesh</p>
          <p className="text-sm font-medium">Remote</p>
          <p className="text-sm text-gray-500">Salary: 50,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Node.js and MongoDB expert needed to build scalable APIs and manage
            backend operations.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>

        {/* Job Card 3 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">UI/UX Designer</h2>
          <p className="text-gray-600">DesignHub</p>
          <p className="text-sm text-indigo-600">Dhaka, Bangladesh</p>
          <p className="text-sm font-medium">Contract</p>
          <p className="text-sm text-gray-500">Salary: 35,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Creative designer to craft user-friendly interfaces, wireframes, and
            prototypes for web applications.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>

        {/* Job Card 4 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Digital Marketer</h2>
          <p className="text-gray-600">MarketPro</p>
          <p className="text-sm text-indigo-600">Chittagong, Bangladesh</p>
          <p className="text-sm font-medium">Part-time</p>
          <p className="text-sm text-gray-500">Salary: 25,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Manage social media campaigns, SEO, and digital ads. Experience in
            Google Ads preferred.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>

        {/* Job Card 5 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Content Writer</h2>
          <p className="text-gray-600">WriteUp Ltd.</p>
          <p className="text-sm text-indigo-600">Sylhet, Bangladesh</p>
          <p className="text-sm font-medium">Remote</p>
          <p className="text-sm text-gray-500">Salary: 20,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Write engaging blog posts, product descriptions, and marketing
            content. Strong English skills required.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>

        {/* Job Card 6 */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Data Analyst</h2>
          <p className="text-gray-600">DataVision</p>
          <p className="text-sm text-indigo-600">Dhaka, Bangladesh</p>
          <p className="text-sm font-medium">Full-time</p>
          <p className="text-sm text-gray-500">Salary: 45,000 BDT</p>
          <p className="mt-2 text-gray-700">
            Analyze datasets, prepare reports, and visualize insights.
            Experience with Excel and Power BI preferred.
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
