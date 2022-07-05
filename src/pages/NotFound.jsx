import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center pt-14 pb-14 font-bold text-5xl my-auto dark:text-gray-300 direction-col">
        Not Found
      </div>
      <Link
        className="flex justify-center text-xl bg-blue-300 rounded-lg w-fit px-3 py-2 mx-auto -mt-7 "
        to="/search"
      >
        Search
      </Link>
    </>
  );
};

export default NotFound;
