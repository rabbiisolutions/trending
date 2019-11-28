import React from "react";
import ImageCard from "../sub-items/ImageCard";
import texts from "../../constants/texts";
import blogs from "../../constants/blogs";
import MoreButton from "../sub-items/MoreButton";
import Overflow from "../utils/Overflow";

const BlogsSection = () => {
  return (
      <section className="blogs">
        <div className="section-title">{texts.blogs}</div>
        <div className="images-frame">
          <ImageCard number={5} title={blogs.cooking.title} src={blogs.cooking.image}
                     className="blog-image" alt="music-blog" content={blogs.cooking.text.substring(0, 160) + texts.more}
                     url="https://rabbiits.wordpress.com/2019/10/23/get-the-best-out-of-home-tuition-for-cooking/"
          />
          <ImageCard number={6} title={blogs.friends.title} src={blogs.friends.image}
                     className="blog-image" alt="language-blog" content={blogs.friends.text.substring(0, 160) + texts.more}
                     url="https://rabbiits.wordpress.com/2019/07/26/plus-friends/"
          />
          <ImageCard number={4} title={blogs.mentor.title} src={blogs.mentor.image}
                     className="blog-image" alt="art-blog" content={blogs.mentor.text.substring(0, 160) + texts.more}
                     url="https://rabbiits.wordpress.com/2019/10/02/04-3-areas-to-get-a-counsellor-mentor-for-your-child/"
          />
          <MoreButton link="https://rabbiits.wordpress.com/author/rabbiitech/"/>
          <Overflow/>
        </div>
      </section>
  );
};

export default BlogsSection;
