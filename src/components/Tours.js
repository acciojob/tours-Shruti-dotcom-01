import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <div className="tours">
      {tours.map(tour => {
        return <Tour key={tour.id} tour={tour} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default Tours;