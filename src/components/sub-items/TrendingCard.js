import Container from "../utils/container";
import React from "react";
import Icon from "../utils/icon";
import twitter from "../../icons/social/twitter-brands.svg"
import youtube from "../../icons/social/youtube-brands.svg"
import facebook from "../../icons/social/facebook-f-brands.svg"
import Card from "../utils/card";
import natureJpeg from "../../images/jpeg/nature.jpeg"
import natureWebp from "../../images/webp/nature.webp"
import mathsJpeg from "../../images/jpeg/maths.jpeg"
import mathsWebp from "../../images/webp/maths.webp"
import physicsJpeg from "../../images/jpeg/physics.jpg"
import physicsWebp from "../../images/webp/physics.webp"
import videoJpeg from "../../images/jpeg/video.jpg"
import videoWebp from "../../images/webp/video.webp"
import webpIsSupported from "../../helpers/webp";


const TrendingCard = () => {
  const icons = (<span className="icons">
    <Icon src={youtube} height={1.5} width={1.5}/>
    <Icon src={facebook} height={1.5} width={1.5}/>
    <Icon src={twitter} height={1.5} width={1.5}/>
  </span>);

  const body = (
    <div>
      <Card title="· 7+ Nature Facts" src={webpIsSupported() ? natureWebp : natureJpeg}/>
      <Card title="· 7+ Maths Facts" src={webpIsSupported() ? mathsWebp : mathsJpeg}/>
      <Card title="· 7+ Physics Facts" src={webpIsSupported() ? physicsWebp : physicsJpeg}/>
      <Card title="· Pun Video II" src={webpIsSupported() ? videoWebp : videoJpeg}/>
    </div>
  );

  return (
    <Container title="Trending" icons={icons} body={body}/>
  );
};

export default TrendingCard;
