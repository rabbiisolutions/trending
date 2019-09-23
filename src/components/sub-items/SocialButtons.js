import wordpress from "../../icons/social/wordpress.svg"
import Icon from "../utils/icon";
import React from "react";
import ButtonLink from "../utils/ButtonLink";

const SocialIcons = () => {
  return (<div className="social-buttons">
    <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frabbiitech%2F&width=146&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId"
        width="146" height="46" scrolling="no"
        frameBorder="0" allowTransparency="true" allow="encrypted-media" title="facebook"/>
    <a href="https://twitter.com/RabbiiTech?ref_src=twsrc%5Etfw"
       className="twitter-follow-button" data-show-count="true">Follow @RabbiiTech</a>
    <ButtonLink link="https://rabbiits.wordpress.com/" icon={<Icon src={wordpress} width={1.5} height={1.5} className="wordpress-icon"/>} value="read @rabbiits" className="wordpress-btn"/>
  </div>);
};

export default SocialIcons;
