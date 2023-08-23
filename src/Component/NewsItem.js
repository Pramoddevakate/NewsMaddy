import React from "react";
import PropTypes from "prop-types";

const NewsItem = (props) => {
  let { title, description, imageurl, Newsurl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3">
        <img
          src={
            imageurl
              ? imageurl
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5p3YUW_RTjyUCyUiwa7hMbxlp2OYsWIzx2ipDYE5kw&s"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div>
            {" "}
            <span
              className=" badge rounded-pill bg-success"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>

          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={Newsurl}
            target="_blank"
            className="btn btn- sm btn-dark"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageurl: PropTypes.string,
  Newsurl: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  country: PropTypes.string,
};

export default NewsItem;
