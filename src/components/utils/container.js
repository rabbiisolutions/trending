import React from "react";

const Container = (props) => {
  return (
      <section className="container">
        <div className="header">
          <span className="">{props.title}</span>
          {props.icons}
        </div>
        <div className="body">
          {props.body}
        </div>
      </section>
  );
};

export default Container;
