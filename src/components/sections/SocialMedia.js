import React from "react";
import ButtonLink from "../utils/ButtonLink";
import wordpress from "../../icons/social/wordpress-brands.svg"
import Icon from "../utils/icon";
import texts from "../../constants/texts";

const SocialMedia = () => {
  return (
      <section className="social-links">
        <div className="section-title">{texts.socialMedia}</div>
        <div className="tag-line">(this week on)</div>
        <div className="social-pages">
          <div className="facebook">
            <a className="title" href="https://www.facebook.com/pg/rabbiitech/posts/">Facebook&nbsp;:&nbsp;7+&nbsp;Human Anatomy&nbsp;Facts</a>
            <div className="links">
              <iframe
                  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Frabbiitech%2F&width=146&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId"
                  width="146" height="30" scrolling="no"
                  frameBorder="0" allowTransparency="true" allow="encrypted-media" title="facebook"/>
            </div>
          </div>
          <div className='twitter'>
            <a className="title" href="https://twitter.com/RabbiiTech/media">Twitter&nbsp;:&nbsp;7+&nbsp;Human Anatomy&nbsp;Facts</a>
            <div className="links">
              <a href="https://twitter.com/RabbiiTech?ref_src=twsrc%5Etfw"
                 className="twitter-follow-button" data-show-count="true">Follow @RabbiiTech</a>
            </div>
          </div>
          <div className="wordpress">
            <a className="title" href="https://rabbiits.wordpress.com/">Blogs&nbsp;:&nbsp;Cooking&nbsp;and&nbsp;Counselling Home Tuition</a>
            <div className="links">
              <ButtonLink link="https://rabbiits.wordpress.com/" icon={<Icon src={wordpress} width={1.5} height={1.5} className="wordpress-icon"/>} value="read @rabbiits" className="wordpress-btn"/>
            </div>
          </div>
        </div>
      </section>
  )
};

export default SocialMedia;
