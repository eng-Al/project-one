import React from "react";

const ShoppingCart = ({ count }) => {
  return (
    <div className="shopping-cart">
      <button className="cart-button">
        Shopping Cart{" "}
        <span className="count-badge">{count > 0 ? count : null}</span>
      </button>
    </div>
  );
};

export default ShoppingCart;
