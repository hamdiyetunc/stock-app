import React from "react";
import {
  FaHome,
  FaBoxOpen,
  FaStore,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white">
      <div className="container mx-auto py-4 sm:py-6 lg:py-8">
        {/* Footer Content */}
        <div className="flex items-center justify-center relative">
          <div className="flex justify-between items-center w-full sm:w-3/4 lg:w-2/2">
            <FooterItem
              icon={
                <FaBoxOpen className="h-4 w-4 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
              }
              label="Stocks"
              link="/stocks"
            />
            <FooterItem
              className="mr-11"
              icon={<FaStore className="h-4 w-4 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />}
              label="Stores"
              link="/stores"
            />
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <a
                href="/home"
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#0077b6] via-[#74dddd] to-[#0077b6] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              >
                <FaHome className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              <span className="mt-2 text-sm font-medium text-white">
                Home Page
              </span>
            </div>
            <FooterItem
              icon={
                <FaMapMarkerAlt className="h-4 w-4 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
              }
              label="Map"
              link="/map"
            />
            <FooterItem
              icon={
                <FaInfoCircle className="h-4 w-4 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
              }
              label="About Us"
              link="/aboutus"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterItemProps {
  icon: React.ReactNode;
  label: string;
  link?: string;
  onClick?: () => void;
  className?: string;
}

const FooterItem: React.FC<FooterItemProps> = ({
  icon,
  label,
  link,
  onClick,
  className,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={link || "#"}
      onClick={handleClick}
      className={`flex flex-col items-center gap-2 hover:text-gray-200 transition duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default Footer;
