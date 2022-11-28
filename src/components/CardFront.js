import "./Card.css";
import { Rating } from "react-simple-star-rating";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function CardFront(props) {
  const [flag, setFlag] = useState(
    props.bookmarks.find((cur) => cur.title === props.title)
  );

  useEffect(() => {
    // Update the document title using the browser API
    setFlag(props.bookmarks.find((cur) => cur.title === props.title));
  });

  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-image">
        <img
          src={require("./../assets/".concat(props.img))}
          alt={props.title}
        ></img>
      </div>
      <div className="card-content-front">
        <div className="content-col">
          <div className="content-section">
            <div className="category-list">
              {props.categories.map((category, i) => (
                <div className="category" key={i}>
                  {category}
                </div>
              ))}
            </div>
          </div>
          <h2>{props.title}</h2>

          <p className="start">Chapters: {props.chapters.toLocaleString()}</p>
          <p className="start">Followers: {props.followers.toLocaleString()}</p>
          <p className="start author">By: {props.author.toLocaleString()}</p>
          {props.warnings.length > 0 && (
            <p className="warnings">Warnings: {props.warnings.join(", ")}</p>
          )}
          <div className="col-end">
            <Rating
              readonly={true}
              allowFraction={true}
              initialValue={props.rating}
              fillColor="crimson"
            ></Rating>
            <IconButton
              aria-label="heart"
              size="large"
              sx={{
                color: flag ? "gold" : "lightgray",
              }}
              onClick={(event) => {
                props.handleBookmarkChange(props, flag, setFlag);
                event.stopPropagation();
              }}
            >
              <BookmarkIcon fontSize="inherit" />
            </IconButton>{" "}
            <div className="bookmark"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
