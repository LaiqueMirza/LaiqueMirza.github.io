import React from "react";
import "./homeCard.css";
import rectangle from "../../../img/rectangle.svg";
import circle from "../../../img/circle.svg";
import triangle from "../../../img/triangle.svg";

const HomeCard = () => {
  return (
    <div className="homeCardDiv">
      <div className="homeCardDivCard1">
        <div className="homeCardDivCardBlack">
          <h3 className="homeCardNum">01</h3>
          <h3 className="homeCardName">SHOP</h3>
          <h3 className="homeCardName">PRODUCTS</h3>
          <img className="homeCardImg" src={rectangle} alt="rectangle svg" />
        </div>
        <p className="homeCardP">
          Our full product line is still available online here on our site!
          Getting outside and hiking is still something you can do. Get your
          gear now!
        </p>
      </div>
      <div className="homeCardDivCard1">
        <div className="homeCardDivCardBlack">
          <h3 className="homeCardNum">02</h3>
          <h3 className="homeCardName">SHOP</h3>
          <h3 className="homeCardName">PRODUCTS</h3>
          <img className="homeCardImg" src={circle} alt="rectangle svg" />
        </div>
        <p className="homeCardP">
          Our full product line is still available online here on our site!
          Getting outside and hiking is still something you can do. Get your
          gear now!
        </p>
      </div>
      <div className="homeCardDivCard1">
        <div className="homeCardDivCardBlack">
          <h3 className="homeCardNum">03</h3>
          <h3 className="homeCardName">SHOP</h3>
          <h3 className="homeCardName">PRODUCTS</h3>
          <img className="homeCardImg" src={triangle} alt="rectangle svg" />
        </div>
        <p className="homeCardP" >
          Our full product line is still available online here on our site!
          Getting outside and hiking is still something you can do. Get your
          gear now!
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
