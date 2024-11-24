import React from "react";
import { FaRegStar, FaWpforms } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { TfiDashboard } from "react-icons/tfi";
import { BiBarChartSquare } from "react-icons/bi";
import { SiPowerapps } from "react-icons/si";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { PiDatabaseThin } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";
import { HiOutlineBell } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { GiCircuitry } from "react-icons/gi";
import { SlDocs } from "react-icons/sl";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2a2e3b] text-[#ebe9e9] flex-shrink-0">
        <div className="flex text-2xl font-bold p-4">
          <SiPowerapps className="text-dark-gray mt-1" />
          STapp
        </div>
        <hr className="border-gray-600 w-full" />
        <nav className="p-4">
          <ul>
            {/* Dashboard */}
            <li className="font-semibold text-[#d6d5d5] mb-8 flex items-center space-x-2">
              <TfiDashboard className="text-dark-gray mr-1" />
              <a href="#" className="hover:text-white">
                Dashboard
              </a>
            </li>

            {/* Theme */}
            <li className="font-semibold text-gray-400 mb-2 flex items-center space-x-2">
              <span className="text-dark-gray text-sm">THEME</span>
            </li>
            <ul className="text-[#d6d5d5] space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <LiaBoxOpenSolid className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Stocks
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <RiProductHuntLine className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
            </ul>

            {/* Components */}
            <li className="font-semibold text-gray-400 mt-4 mb-2 flex items-center space-x-2">
              <span className="text-dark-gray text-sm">COMPONENTS</span>
            </li>
            <ul className="text-[#d6d5d5] space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <PiDatabaseThin className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Base
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <BiBarChartSquare className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Charts
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaWpforms className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Forms
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaRegBell className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Notifications
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdOutlineWidgets className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Widgets
                </a>
                <span className="bg-blue text-white text-xs ml-2 px-2 py-1 rounded">
                  NEW
                </span>
              </li>
            </ul>

            {/* Extras */}
            <li className="font-semibold text-gray-400 mt-4 mb-2 flex items-center space-x-2">
              <span className="text-dark-gray text-sm">EXTRAS</span>
            </li>
            <ul className="text-[#d6d5d5] space-y-2">
              <li className="flex items-center space-x-2">
                <FaRegStar className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Pages
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <SlDocs className="text-dark-gray mr-1" />
                <a href="#" className="hover:text-white">
                  Docs
                </a>
              </li>
            </ul>
          </ul>
        </nav>
        <button className="flex p-4 w-full text-left text-[#6c67b4] py-2 rounded hover:bg-[#3a3e4b]">
          <GiCircuitry className="mt-1 mr-3" />
          Try CoreUI PRO
        </button>
        <hr className="border-gray-600 w-full mt-3" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#3c404d] p-8 w-full">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-[#ebe9e9] font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <HiOutlineBell className="text-[#d6d5d5] text-xl" />
            <IoMailOutline className="text-[#d6d5d5] text-xl" />
            <hr className="text-white h-full" />
            <IoMoonOutline className="text-[#d6d5d5] text-xl" />
            <hr className="text-white h-full" />
            <img
              src="../../../../../src/assets/images/user-pic.png"
              alt="User Avatar"
              className="rounded-full w-8 h-8"
            />
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#915fee] text-white p-4 rounded shadow">
            <h2 className="text-xl">26K</h2>
            <p>Users</p>
            <p className="text-sm mt-2">-12.4% ↓</p>
          </div>
          <div className="bg-[#5092da] text-white p-4 rounded shadow">
            <h2 className="text-xl">$6,200</h2>
            <p>Income</p>
            <p className="text-sm mt-2">+40.9% ↑</p>
          </div>
          <div className="bg-[#d6b44e] text-black p-4 rounded shadow">
            <h2 className="text-xl">2.49%</h2>
            <p>Conversion Rate</p>
            <p className="text-sm mt-2">+84.7% ↑</p>
          </div>
          <div className="bg-[#e04958] text-white p-4 rounded shadow">
            <h2 className="text-xl">44K</h2>
            <p>Sessions</p>
            <p className="text-sm mt-2">-23.6% ↓</p>
          </div>
        </div>

        <div className="bg-[#2a2e3b] p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Traffic (January - July 2023)
          </h2>
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-500">Day | Month | Year</div>
            <button className="text-blue-500">Filter</button>
          </div>
          <div className="h-64 bg-gray-100 rounded">[Graph Placeholder]</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
