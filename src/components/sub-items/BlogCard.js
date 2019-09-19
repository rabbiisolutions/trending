import React from "react";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
     <div className="text">
       <span className="blog-num">
         <sup>{props.num}</sup>&frasl;<sub>{props.den}</sub>
       </span>
       <span className="blog-title">{props.title}</span>
     </div>
      <div className="image">
        <img alt="card-display" className="blog-image" src={props.src}/>
      </div>
    </div>
  );
};

export default BlogCard;
