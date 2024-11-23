import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow mt-[80px] sm:mt-[100px] lg:mt-[120px]">
        <div className="container mx-auto p-4 mb-4 lg:p-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
