import React from "react";

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: "Product A", price: 199.99, stock: 34 },
    { id: 2, name: "Product B", price: 99.99, stock: 10 },
    { id: 3, name: "Product C", price: 149.99, stock: 0 },
    { id: 4, name: "Product D", price: 249.99, stock: 7 },
  ];

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center bg-gradient-to-r from-[#030303] to-[#181817] text-transparent bg-clip-text mb-10">
          Product Stock Management
        </h1>
        <h1 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#030303] to-[#181817] bg-clip-text mb-8">
          Stock List
        </h1>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-lg shadow-lg p-6 bg-white ${
                product.stock === 0
                  ? "border-2 border-red-500"
                  : "hover:shadow-xl transition-shadow"
              }`}
            >
              <h2 className="text-2xl font-semibold text-dark-gray mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-dark-blue mb-4">
                {product.price.toFixed(2)}₺
              </p>
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.stock > 0
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {product.stock > 0 ? `Stock: ${product.stock}` : "Sold Out"}
                </span>
              </div>
              <button
                className={`w-full py-2 rounded-lg font-medium ${
                  product.stock > 0
                    ? "bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white hover:bg-blue-600"
                    : "bg-gray-400 cursor-not-allowed opacity-50 grayscale text-black"
                }`}
                disabled={product.stock === 0}
              >
                {product.stock > 0 ? "Select" : "Sold Out"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
