import React from "react";
import Image from "../utils/image";

const ImageCard = (props) => {
  return (
      <div className="image-card">
        <div className="title">
          <div>#0{props.number}</div>
          <div>{props.title}</div>
        </div>
        <div className="image">
          <Image src={props.src} className={props.className} alt={props.alt}/>
        </div>
      </div>
  );
};

export default ImageCard;
