import React from "react";
import texts from "../constants/texts";
import blogs from "../constants/blogs";
import MoreButton from "./basic/MoreButton";
import Overflow from "./basic/Overflow";
import ImageWebp from "../helpers/ImageWebp";

const ImageCard = (props) => {
  return (
      <a className="image-card" href={props.url}>
        <section className="header">
          <div className="num">#0{props.number}</div>
          <div className="title">{props.title}</div>
        </section>
        <section className="image">
          <ImageWebp
              src={props.image.jpeg}
              srcWebp={props.image.webp}
              className={"blog-image"}
              alt={props.alt}
          />
        </section>
        <section className="content">
          {props.content.substring(0, 160) + texts.more}
        </section>
      </a>
  );
};

const BlogsSection = () => {
  return (
      <section className="blogs">
        <div className="section-title">{texts.blogs}</div>
        <div className="images-frame">
          {blogs.map((blog => (
              <ImageCard number={blog.num} title={blog.title} image={blog.image}
                         alt={blog.alt} content={blog.text}
                         url={blog.url} key={blog.key}
              />
          )))}
          <MoreButton link="https://rabbiits.wordpress.com/author/rabbiitech/"/>
          <Overflow/>
        </div>
      </section>
  );
};

export default BlogsSection;
