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
import MoreButton from "./MoreButton";
import Video from "../utils/video";


/*const TrendingCard = () => {
  /*const icons = (<span className="icons">
    <Icon src={youtube} height={2.5} width={2.5} className="youtube"/>
    <Icon src={facebook} height={2.5} width={2.5} className="facebook"/>
    <Icon src={twitter} height={2.5} width={2.5} className="twitter"/>
  </span>);

  //const image = (<img alt="card-display" src={webpIsSupported() ? natureWebp : natureJpeg}
  // className="card-image"/>);

  const body = (
    <div className="body">
      <Card title="· 7+ Maths Facts" body={<Video id="obRan47jNT0" title="maths-facts"/>}/>
      <Card title="· 7+ Nature Facts" body={image}/>
      <Card title="· 7+ Physics Facts" body={<Video id="vfeXAvUbeVk" title="physics-facts"/>}/>
      <Card title="· Pun Video II" body={<Video id="j5wR-DuqJXY" title="pun-video"/>}/>
    </div>
  );

  return (
    <Container title="Trending" icons={icons} body={body} context="trending" footer={<MoreButton link="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg/videos"/>}/>
  );
};

export default TrendingCard;*/
