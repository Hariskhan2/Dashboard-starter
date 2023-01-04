import React from "react";
import Card from "../Card/Card.js"
import "./Cards.css";
import { cardsData } from "../../Data/Data";
const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
            key={card.name} 
            title={card.title}
            color={card.color}
            barvalue={card.barvalue}
            value={card.value}
            png={card.png}
            series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
