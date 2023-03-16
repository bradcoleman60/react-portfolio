import React, { useState } from "react";
import NavTabs from "./Navtabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutA");

  //Check which value of the 'currentPage is and render correct page
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
        case "Resume":
        return <Resume />;

      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/*Pass currentPage from state and function to update it*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call on render page method to return component*/}
      {renderPage()}
    </div>
  );
}
