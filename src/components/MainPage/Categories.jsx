import React from "react";

const Categories = () => {
  const data = [
    // You can add your category objects here if needed
  ];

  // Only render the div if there are categories
  if (data.length === 0) {
    return null; // Return null to avoid rendering anything
  }

  return (
    <div className="category">
      {data.map((value, index) => (
        <div className="box f_flex" key={index}>
          <img src={value.cateImg} alt={value.cateName} />
          <span>{value.cateName}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;