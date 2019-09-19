import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        {props.title}
      </div>
      <div className="body">
        <img alt="card-display" src={props.src} height={300} width={520}/>
      </div>
    </div>
  );
};

export default Card;
