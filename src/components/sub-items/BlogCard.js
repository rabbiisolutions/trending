import React from "react";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
     <div className="text">
       <div className="blog-num">
         <sup>{props.num}</sup><span>&frasl;</span><sub>{props.den}</sub>
       </div>
       <div className="blog-title">{props.title}</div>
     </div>
      <div className="image">
        <img alt="card-display" className="blog-image" src={props.src}/>
      </div>
    </div>
  );
};

export default BlogCard;
