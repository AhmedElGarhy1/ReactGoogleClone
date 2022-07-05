import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Result = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm != "") {
      console.log("Am Here");
      getResults(`/search/q=${searchTerm}&num=40`);
    }
  }, [searchTerm]);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 py-5 sm:p-5 lg:p-5 md-px-56">
          {results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline dark:text-blue-300 text-blue-700"
              >
                {title}
              </a>
            </div>
          ))}
        </div>
      );
  }
};

export default Result;
