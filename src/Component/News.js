import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const News = ({
  onCountryChange,
  selectedCountry ,
  selectedCategory,
  setProgress,
  apikey,
  pagesize,
}) => {
  const countryCategories = {
    ae: "United Arab Emirates",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    br: "Brazil",
    ca: "Canada",
    gr: "Greece",
    in: "India",
    jp: "Japan",
    kr: "South Korea",
    nr: "Nauru",
    rs: "Serbia",
    sa: "Saudi Arabia",
    se: "Sweden",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
  };

  const [articles, setarticals] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  document.title = `${
    selectedCategory.charAt(1).toUpperCase() + selectedCategory.slice(2)
  } News-Maddy`;

 
  const updateurl = async () => {
    setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory.slice(
      1
    )}&apiKey=${apikey}&page=${page}&pageSize=${pagesize}`;
    console.log("update url = " + url);
    setloading(true);
    let data = await fetch(url);
    setProgress(60);
    let receiveddata = await data.json();
    console.log(receiveddata);
    setProgress(80);
    setarticals((prevArticles) => [...prevArticles, ...receiveddata.articles]);
    settotalResults(receiveddata.totalResults);
    setloading(false);
    setProgress(100);
  };

  
  
  const fetchMoreData = async () => {
    const nextPage = page + 1; // Increment the page state
    setpage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory.slice(
      1
    )}&apiKey=${apikey}&page=${nextPage}&pageSize=${pagesize}`;
    console.log("fetchmoredata url = " + url);
    setloading(true);
    let data = await fetch(url);
    setProgress(60);
    let receiveddata = await data.json();
    console.log(receiveddata);
    setProgress(80);
    setarticals((prevArticles) => [...prevArticles, ...receiveddata.articles]);
    settotalResults(receiveddata.totalResults);
    setloading(false);
    setpage(nextPage); // Update the state with the new page value
    setProgress(100);
  };

  useEffect(() => {
    updateurl();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="my-3 mx-10"
        style={{ position: "absolute", right: "150px" }}
      >
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="country-dropdown"
            data-bs-toggle="dropdown"
          >
            Country
          </button>
          <ul className="dropdown-menu" aria-labelledby="country-dropdown">
            {Object.entries(countryCategories).map(([country, name]) => (
              <li key={name}>
                <Link
                
      to={`/${country}${selectedCategory}`}
      onClick={() => {
        onCountryChange(country);
      }}>{name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <h1 className="text-center heading123 " >
        News-Maddy - Top
        {selectedCategory.charAt(1).toUpperCase() +
          selectedCategory.slice(2)}{" "}
        Headines
      </h1>
      <div className="container">
        {loading && <Spinner />}
        <InfiniteScroll
          style={{ overflow: "none" }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row  my-5">
            {articles.map((element) => (
              <div className="col-md-3 my-2"   key={`${element.url}-${element.publishedAt}`}>
                {/* Use a combination of fields as the key */}
                <NewsItem
                
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  Newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  selectedCountry: "in",
  selectedCategory: "/general",
  pagesize: 12,
  apikey: "null",
};

News.propTypes = {
  selectedCountry: PropTypes.string,
  selectedCategory: PropTypes.string,
  pagesize: PropTypes.number,
  apikey: PropTypes.string,
};


export default News;
