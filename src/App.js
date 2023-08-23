import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  
  const [progress, setProgress] = useState(0);
  const pagesize = 12;
  const apikey = process.env.React_App_News_API;
  const [selectedCountry, setSelectedCountry] = useState("in");
  const [selectedCategory, setSelectedCategory] = useState("/general");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const countryCategories = {
    ae: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    at: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    au: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    be: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    br: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    ca: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    gr: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    in: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    jp: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    kr: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    nr: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    rs: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    sa: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    se: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    tw: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    ua: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
    us: [
      "/general",
      "/business",
      "/entertainment",
      "/health",
      "/science",
      "/sports",
      "/technology",
    ],
  };

  return (
    <Router>
          <Navbar
  selectedCountry={selectedCountry}
  selectedCategory={selectedCategory}
  onCategoryChange={handleCategoryChange}
/>
      <div>
    
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          {/* Routes for each country */}
          {Object.entries(countryCategories).map(([country, categories]) =>
            categories.map((category) => (
              <Route
              
                exact
                path={`/${country}${category}`}
                element={
                  <News
                  key={`${category}${country}`}
                  selectedCountry={selectedCountry}
                  selectedCategory={selectedCategory}
                  onCountryChange={handleCountryChange}
                  onCategoryChange={handleCategoryChange}
                  
                    setProgress={setProgress}
                    apikey={apikey}
                    pagesize={pagesize}
                    country={country}
                    category={category}
                  />
                }
              />
            ))
          )}
          <Route
            exact
            path="/"
            element={
              <News key="genralindia"
                setProgress={setProgress}
                apikey={apikey}
                pagesize={pagesize}
                country="in"
                category="/general"
              />
            }
          />
          <Route
            path="/"
            element={
              <News key="genralindia1"
                setProgress={setProgress}
                apikey={apikey}
                pagesize={pagesize}
                country="in"
                category="/general"
              />
            }
          />
        </Routes>
      
      </div>
    </Router>
  );
};




export default App;
