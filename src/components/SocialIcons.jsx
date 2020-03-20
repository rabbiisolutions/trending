import twitter from "../assets/icons/social/twitter.svg"
import youtube from "../assets/icons/social/youtube.svg"
import facebook from "../assets/icons/social/facebook.svg"
import wordpress from "../assets/icons/social/wordpress.svg"
import React from "react";
import Icon from "./basic/Icon";

const SocialLink = (props) => {
  return (
      <a href={props.href} title={props.title}><Icon src={props.src} height={2.5} width={2.5} units={'rem'} className={props.className}/></a>
  );
};

const SocialIcons = () => {
  return (
      <div className="social-icons hidden">
        <SocialLink src={youtube} className="youtube" title="Subscribe to RABBII TECH Channel" href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg"/>
        <SocialLink src={twitter} className="twitter" title="View Rabbii Elimu Page" href="https://twitter.com/RabbiiTech"/>
        <SocialLink src={facebook} className="facebook" title="Visit Rabbii Technology Solutions Page" href="https://www.facebook.com/rabbiitech/"/>
        <SocialLink src={wordpress} className="wordpress" title="Read Rabbii TS Blogs" href="https://rabbiits.wordpress.com/"/>
      </div>
  );
};

export default SocialIcons;
