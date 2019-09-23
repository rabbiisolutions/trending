import twitter from "../../icons/social/twitter-brands.svg"
import youtube from "../../icons/social/youtube-brands.svg"
import facebook from "../../icons/social/facebook-f-brands.svg"
import wordpress from "../../icons/social/wordpress-brands.svg"
import React from "react";
import SocialLink from "../utils/SocialLink";

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
