import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("Elon Mask");
  const { setSearchTerm } = useResultContext();

  return (
    <div className="relative mx-auto md:-mt-10 mx:-mb-10">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text && (
        <button
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <button
        onClick={() => setSearchTerm(text)}
        className="absolute top-1.5 -right-39 ml-3 p-2.5 text-white dark:bg-blue-900 bg-blue-600 rounded-full"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
