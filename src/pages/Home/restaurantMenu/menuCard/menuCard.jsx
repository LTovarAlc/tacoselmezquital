import React from 'react';
import './menuCard.css';

const CardMenu = ({ title, dishes }) => {
  return (
    <div className="cardMenu">
      <h2 className="card-title">{title}</h2>
      <div className="cardDishes__container">
        {dishes.map((dish, index) => (
          <div key={index}>
            <div className="dish-detail">
              <h3 className="dish-name">{dish.name}</h3>
              <span>{dish.price}</span>
            </div>
            {dish.description && dish.description.length > 0 && (
              <ul className="dish-descript">
                {dish.description.map((item, idx) => (
                  <li key={idx} className="dish-descript__item">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMenu;
