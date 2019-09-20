import React from "react";

const Container = (props) => {
  return (
      <section className={"container " + props.context}>
        <div className="header">
          <span className="title">{props.title}</span>
          {props.icons}
        </div>
        {props.body}
        <div className="footer">
          {props.footer}
        </div>
      </section>
  );
};

export default Container;
