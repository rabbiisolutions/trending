import wordpress from "../assets/icons/social/wordpress.svg"
import Icon from "./basic/Icon";
import React from "react";
import ButtonLink from "./basic/ButtonLink";

const SocialButtons = () => {
  return (
      <div className="social-buttons hidden">
        <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frabbiitech%2F&width=146&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId"
            width="146" height="30" scrolling="no"
            frameBorder="0" allow="encrypted-media" title="facebook"/>
        <a href="https://twitter.com/RabbiiTech?ref_src=twsrc%5Etfw"
           className="twitter-follow-button" data-show-count="false">Follow @RabbiiTech</a>
        <ButtonLink link="https://rabbiits.wordpress.com/" icon={<Icon src={wordpress} width={1.5} height={1.5} units={'rem'} className="wordpress-icon"/>} value="read @rabbiits" className="wordpress-btn"/>
      </div>
  );
};

export default SocialButtons;
