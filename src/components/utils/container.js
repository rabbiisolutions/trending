import React from "react";

const Container = (props) => {
  return (
      <div className="card">
        <div className="header">
          <span className="">{props.title}</span>
          <span>
          {props.icons}
        </span>
        </div>
        <div className="body">
          {props.body}
        </div>
      </div>
  );
};

export default Container;
