import React, { useState } from "react";
import "../styles/ItemCard.css";
const ItemCard = ({ item, setListOfItems }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="item-card">
      <div className="item-card-img-cont">
        <img src={item.image} alt="" />
      </div>
      <div className="item-card-info">
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
        <p>Rating: {item.rating.rate}☆</p>
        <div className="quantity-control">
          <button
            onClick={() =>
              setQuantity((prevQ) => (prevQ - 1 < 0 ? prevQ : prevQ - 1))
            }
          >
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity((prevQ) => prevQ + 1)}>+</button>
        </div>
        <button
          onClick={() => {
            if (quantity === 0) return;
            setListOfItems((prevList) => {
              const index = prevList.findIndex((el) => el.item.id === item.id);
              if (index !== -1) {
                return prevList.map((el, i) =>
                  i === index ? { ...el, quantity: el.quantity + quantity } : el
                );
              } else {
                return [...prevList, { item, quantity }];
              }
            });
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
