import React from "react";

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "TechStore Downtown",
    address: "123 Main Street, City Center, NY",
    phone: "(555) 123-4567",
    email: "downtown@techstore.com",
  },
  {
    id: 2,
    name: "TechStore Uptown",
    address: "456 Elm Street, Uptown, NY",
    phone: "(555) 987-6543",
    email: "uptown@techstore.com",
  },
  {
    id: 3,
    name: "TechStore Suburb",
    address: "789 Pine Avenue, Suburb, NY",
    phone: "(555) 246-1357",
    email: "suburb@techstore.com",
  },
];

const Stores: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#0077b6]">Stores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-[#0077b6]">
              {store.name}
            </h2>
            <p className="text-gray-600 mt-2">
              <strong>Address:</strong> {store.address}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong> {store.phone}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${store.email}`}
                className="text-[#0077b6] hover:underline"
              >
                {store.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
