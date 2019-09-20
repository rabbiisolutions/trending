import Container from "../utils/container";
import Icon from "../utils/icon";
import wordpress from "../../icons/social/wordpress.svg";
import webpIsSupported from "../../helpers/webp";
import musicWebp from "../../images/webp/music.webp";
import musicJpeg from "../../images/jpeg/music.jpg";
import languageWebp from "../../images/webp/language.webp";
import languageJpeg from "../../images/jpeg/language.jpg";
import artWebp from "../../images/webp/art.webp";
import artJpeg from "../../images/jpeg/art.jpg";
import React from "react";
import BlogCard from "./BlogCard";
import MoreButton from "./MoreButton";

const denominator = 15;

const BlogsCard = () => {
  const icons = (<span className="icons">
    <Icon src={wordpress} height={1.5} width={1.5}/>
  </span>);

  const body = (
      <div>
        <BlogCard num={1} den={denominator} title="Music Home Tuition" src={webpIsSupported() ? musicWebp : musicJpeg}/>
        <BlogCard num={1} den={denominator} title="Foreign Language" src={webpIsSupported() ? languageWebp : languageJpeg}/>
        <BlogCard num={1} den={denominator} title="Art Home Tuition" src={webpIsSupported() ? artWebp : artJpeg}/>
        <MoreButton link="https://rabbiits.wordpress.com/author/rabbiitech/"/>
      </div>
  );

  return (
      <Container title="Blogs" icons={icons} body={body} context="blogs"/>
  );

};

export default BlogsCard;
