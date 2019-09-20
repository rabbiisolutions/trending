import React from "react";

const Container = (props) => {
  return (
      <section className={"container " + props.context}>
        <div className="header">
          <span className="title">{props.title}</span>
          {props.icons}
        </div>
        <div className="body">
          {props.body}
        </div>
      </section>
  );
};

export default Container;
