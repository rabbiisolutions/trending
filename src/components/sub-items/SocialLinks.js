import React from "react";
import ButtonLink from "../utils/ButtonLink";
import wordpress from "../../icons/social/wordpress.svg"
import Icon from "../utils/icon";

const SocialLinks = () => {
  return (
      <section className="social-links">
        <div className="tag-line">This week on</div>
        <div className="social-pages">
          <div className="facebook">
            <div className="title">&middot;&nbsp;Facebook&nbsp;:&nbsp;7+&nbsp;Food&nbsp;Facts</div>
            <div className="links">
              <iframe
                  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frabbiitech%2F&width=146&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId"
                  width="146" height="46" scrolling="no"
                  frameBorder="0" allowTransparency="true" allow="encrypted-media" title="facebook"/>
            </div>
          </div>
          <div className='twitter'>
            <div className="title">&middot;&nbsp;Twitter&nbsp;:&nbsp;7+&nbsp;Food&nbsp;Facts</div>
            <div className="links">
              <a href="https://twitter.com/RabbiiTech?ref_src=twsrc%5Etfw"
                 className="twitter-follow-button" data-show-count="false">Follow @RabbiiTech</a>
            </div>
          </div>
          <div className="wordpress">
            <div className="title">&middot;&nbsp;Blogs&nbsp;:&nbsp;7+&nbsp;Food&nbsp;Facts</div>
            <div className="links">
              <ButtonLink link="https://rabbiits.wordpress.com/" icon={<Icon src={wordpress} width={1.5} height={1.5} className="wordpress-icon"/>} value="Wordpress" className="wordpress-btn"/>
            </div>
          </div>
        </div>
      </section>
  )
};

export default SocialLinks;
