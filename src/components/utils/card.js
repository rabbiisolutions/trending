import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        {props.title}
      </div>
      <div className="body">
        {props.body}
      </div>
    </div>
  );
};

export default Card;
