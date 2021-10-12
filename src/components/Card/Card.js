import React from "react";
import "./Card.css";

const Card = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <div className="card_img_container">
        <img
          src={props.cardData.thumbnailUrl}
          className="card_img"
          alt="cardImage"
        />
      </div>
      <div className="card_circle_icon">{props.cardData.id}</div>
      <div className="card_description">
        <div className="card_title">{props.cardData.title}</div>
      </div>
    </div>
  );
};

export default Card;
