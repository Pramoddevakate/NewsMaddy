import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Home", path: "/general" },
  { name: "About_us", path: "/about" },
  { name: "Business", path: "/business" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "General", path: "/general" },
  { name: "Health", path: "/health" },
  { name: "Science", path: "/science" },
  { name: "Sports", path: "/sports" },
  { name: "Technology", path: "/technology" },
];

const Navbar = (props)=> 

{   let {
  selectedCountry,
  onCategoryChange,
}=props;
  return (
    
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="logo">
            <span className="icon">
              <i className="fas fa-newspaper"></i>
            </span>
            <Link className="text1" to="/">News-</Link>
            <Link className="text2" to="/">Maddy</Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {categories.map((category, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link"onClick={() => onCategoryChange(category.path)} to={`/${selectedCountry}${category.path}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
