import React from "react";

const Container = (props) => {
  return (
      <section className="card">
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
