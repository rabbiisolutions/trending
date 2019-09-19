import React from "react";

const Container = (props) => {
  return (
      <section className="card">
        <div className="header">
          <span className="">{props.title}</span>
          <span>
          {props.icons}
        </span>
        </div>
        <div className="body">
          {props.body}
        </div>
      </section>
  );
};

export default Container;
