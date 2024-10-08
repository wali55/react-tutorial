import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(3)
        .fill("")
        .map((e, i) => (
          <div key={i} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
