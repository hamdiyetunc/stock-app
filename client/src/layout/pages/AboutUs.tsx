import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-5xl mb-4 font-extrabold text-center bg-gradient-to-r text-[#0077b6] text-transparent bg-clip-text">
          ABOUT US:
        </h1>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to ST Management! We are dedicated to providing innovative
          solutions for stock and store management. Our mission is to streamline
          inventory processes and empower businesses with user-friendly tools to
          manage their operations efficiently.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#0077b6]">
          Our Vision
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          To become a leading provider of inventory management solutions
          globally, helping businesses of all sizes achieve their operational
          goals.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-[#0077b6]">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "John Doe", role: "CEO", image: "/path/to/image1.jpg" },
            { name: "Jane Smith", role: "CTO", image: "/path/to/image2.jpg" },
            {
              name: "Alice Johnson",
              role: "Lead Developer",
              image: "/path/to/image3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mx-auto w-20 h-20 mb-4"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
