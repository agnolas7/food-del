import React from "react";
import "./Header.css";

const Header = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("explore-menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button onClick={handleScrollToMenu}>View Menu</button> {/* Smooth scroll to menu */}
      </div>
    </div>
  );
};

export default Header;
