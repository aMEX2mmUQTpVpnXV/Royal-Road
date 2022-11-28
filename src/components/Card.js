import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import React from "react";
import "./Card.css";

class Card extends React.Component {
  // Basic Card Flipping setup taken from React-Card-Flip Documentation
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="container">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <CardFront
            title={this.props.title}
            rating={this.props.rating}
            categories={this.props.categories}
            img={this.props.img}
            chapters={this.props.chapters}
            followers={this.props.followers}
            warnings={this.props.warnings}
            author={this.props.author}
            bookmarks={this.props.bookmarks}
            handleBookmarkChange={this.props.handleBookmarkChange}
            onClick={this.handleClick}
          ></CardFront>
          <CardBack
            title={this.props.title}
            desc={this.props.desc}
            img={this.props.img}
            onClick={this.handleClick}
          ></CardBack>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;
