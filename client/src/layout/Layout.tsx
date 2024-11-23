import React from "react";
import Router from "./Router";

const Layout: React.FC = () => {
  return (
    <div className="flex mx-auto w-screen">
      <Router />
    </div>
  );
};

export default Layout;
