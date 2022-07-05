import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-1.5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between item-center space-x-5 w-screen">
        <Link to="/">
          <div className="text-2xl bg-blue-500 font-bold text-white px-2 py-1 rounded dark:bg-gray-700">
            ElGarhy 🔎
          </div>
        </Link>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-x text-white dark:bg-gray-50 bg-gray-900 dark:text-gray-900 border rounded-full px-2 py-1 font-bold hover:shadow-lg"
        >
          {darkTheme ? "Light ☀️" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
