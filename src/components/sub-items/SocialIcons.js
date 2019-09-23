import twitter from "../../icons/social/twitter-brands.svg"
import youtube from "../../icons/social/youtube-brands.svg"
import facebook from "../../icons/social/facebook-f-brands.svg"
import wordpress from "../../icons/social/wordpress-brands.svg"
import Icon from "../utils/icon";
import React from "react";

const SocialIcons = () => {
  return (<div className="social-icons">
    <Icon src={youtube} height={2.5} width={2.5} className="youtube"/>
    <Icon src={twitter} height={2.5} width={2.5} className="twitter"/>
    <Icon src={facebook} height={2.5} width={2.5} className="facebook"/>
    <Icon src={wordpress} height={2.5} width={2.5} className="wordpress"/>
  </div>);
};

export default SocialIcons;
