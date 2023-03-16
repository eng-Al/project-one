import React, { useState } from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the button state after clicking
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  const buttonStyle = {
    transform: isClicked ? "translateY(2px)" : "none",
    transition: "transform 0.1s ease-in-out",
  };

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <button
            className="custom__button--item"
            onClick={handleClick}
            style={buttonStyle}
          >
            {title}
          </button>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;

