import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-aqua mb-2">
          {product.name}
        </h2>
        <p className="text-xl text-gray-600">{product.price}₺</p>
        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-white font-medium ${
              product.stock > 0 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {product.stock > 0 ? `Stokta: ${product.stock}` : "Stokta Yok"}
          </span>
          <button
            className={`px-6 py-3 rounded-lg font-medium text-white ${
              product.stock > 0
                ? "bg-aqua hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={product.stock <= 0}
          >
            {product.stock > 0 ? "Sepete Ekle" : "Stokta Yok"}
          </button>
        </div>
      </div>
    </div>
  );
};
