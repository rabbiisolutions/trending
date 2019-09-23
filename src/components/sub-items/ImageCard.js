import React from "react";
import Image from "../utils/image";

const ImageCard = (props) => {
  return (
      <div className="image-card">
        <section className="header">
          <div className="num">#0{props.number}</div>
          <div className="title">{props.title}</div>
        </section>
        <section className="image">
          <Image src={props.src} className={props.className} alt={props.alt}/>
        </section>
        <section className="content">
          {props.content}
        </section>
      </div>
  );
};

export default ImageCard;
