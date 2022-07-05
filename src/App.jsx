import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import NotFound from "./pages/NotFound";
export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Router>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100 dark:text-gray-100 text-gray-black  dark:bg-gray-900 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route exact path="/" element={<Navigate to="/search" />} />
            <Route exact path={"/search"} element={<Result />} />
            <Route exact path={"/news"} element={<Result />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};
