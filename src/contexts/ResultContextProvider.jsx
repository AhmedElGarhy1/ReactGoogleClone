import React, { createContext, useContext, useState } from "react";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("elon mask");

  const getResults = async (type) => {
    console.log(type);
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "f0c80de1cemsh70db71c17cbf347p153920jsn6ef59f7bdb8a",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(data);
    if (type.includes("/search")) {
      setResults(data.results);
    } else {
      setResults(data.entries);
    }
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, setSearchTerm, searchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
