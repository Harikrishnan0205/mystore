import React, { useState } from "react";
import {
  FaCouch,
  FaAppleAlt,
  FaSprayCan,
  FaWineBottle,
  FaHome,
  FaUtensils,
  FaStar,
} from "react-icons/fa";
import '../App.css'

const Category = ({ setselectCategory }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "all", icon: <FaStar /> },
    { label: "beauty", icon: <FaSprayCan /> },
    { label: "fragrances", icon: <FaWineBottle /> },
    { label: "groceries", icon: <FaAppleAlt /> },
    { label: "furniture", icon: <FaCouch /> },
    { label: "home-decoration", icon: <FaHome /> },
    { label: "kitchen-accessories", icon: <FaUtensils /> },
  ];

  //selecting category pass as proprender
  const onSelectProduct = (cat) => {
    setselectCategory(cat);
    setActiveCategory(cat);
  };

  return (
    <>
    <div className="category-container">
      <div className="category-scroll">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${activeCategory === cat.label ? "active" : ""}`}
            onClick={() => onSelectProduct(cat.label)}
          >
            <div className="category-icon">{cat.icon}</div>
            <div className="category-label">{cat.label.replace("-", " ")}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Category;

