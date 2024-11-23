import React from "react";
import { FaCogs, FaBoxOpen, FaChartBar } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <div className="container mx-auto mt-144">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white rounded-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Simplify Inventory Management
          </h1>
          <p className="text-lg mb-6">
            Easily track and manage your products' stock levels effortlessly.
            Fast, reliable and efficient stock management is here!
          </p>
          <a
            href="#stock-list"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white rounded-lg font-medium text-lg hover:scale-105 transition-transform"
          >
            Manage Products
          </a>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Stock Tracking</h3>
            <p className="text-sm text-dark-gray">
              Track your products' stock levels in real time.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaBoxOpen className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Management</h3>
            <p className="text-sm text-dark-gray">
              Easily add, edit and manage your stocks.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaChartBar className="text-4xl text-[#0077b6] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reporting</h3>
            <p className="text-sm text-dark-gray">
              Get detailed reports on sales and stock status.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-16 bg-light-aqua py-12 rounded-lg">
          <h2 className="text-3xl lg:text-4xl text-white font-extrabold text-center mb-6">
            How It Works?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Step 1</h3>
              <p className="text-sm text-white">
                Add your products to the system.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Step 2</h3>
              <p className="text-sm text-white">
                Keep track of your stock levels.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Step 3</h3>
              <p className="text-sm text-white">
                Analyze your sales performance with detailed reports.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section id="stock-list" className="mt-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center bg-gradient-to-r from-[#030303] to-[#181817] text-transparent bg-clip-text mb-8">
            Popular Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Product A
              </h3>
              <p className="text-lg text-dark-blue mb-4">199.99₺</p>
              <button className="w-full py-2 rounded-lg font-medium bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white hover:bg-blue-600">
                Select
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Product B
              </h3>
              <p className="text-lg text-dark-blue mb-4">499.99₺</p>
              <button className="w-full py-2 rounded-lg font-medium bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white hover:bg-blue-600">
                Select
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">
                Product C
              </h3>
              <p className="text-lg text-dark-blue mb-4">299.99₺</p>
              <button className="w-full py-2 rounded-lg font-medium bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white hover:bg-blue-600">
                Select
              </button>
            </div>
            {/* Repeat for other products */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
