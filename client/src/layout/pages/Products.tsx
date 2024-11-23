import React from "react";

const Products: React.FC = () => {
  const products = [
    { id: 1, name: "Product A", price: "$100", category: "Electronics" },
    { id: 2, name: "Product B", price: "$150", category: "Home Appliances" },
    { id: 3, name: "Product C", price: "$200", category: "Furniture" },
  ];

  return (
    <div className="shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#0077b6]">Products</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{product.id}</td>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
