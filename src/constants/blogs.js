import mentorJpeg from "../assets/images/jpeg/mentor.jpg";
import cookingJpeg from "../assets/images/jpeg/cooking.jpg";
import friendsJpeg from "../assets/images/jpeg/friends.jpg";
import mentorWebp from "../assets/images/webp/mentor.webp";
import cookingWebp from "../assets/images/webp/cooking.webp";
import friendsWebp from "../assets/images/webp/friends.webp";

// 28/11/2019
const mentor = {
  title: '3 Areas to get a counsellor',
  image: {webp: mentorWebp, jpeg: mentorJpeg},
  text: 'Learners are caught up in dilemmas making critical decisions about their academics, ' +
      'choosing career paths and other important life decisions. Unfortunately, most of them end ' +
      'up making bad decisions which end up affecting their future lives negatively. But, have you' +
      ' ever thought of getting an experienced person in that field to guide your child through?',
  num: 4, alt: "art-blog", key: 'b1',
  url: "https://rabbiits.wordpress.com/2019/10/02/04-3-areas-to-get-a-counsellor-mentor-for-your-child/"
};
const cooking = {
  title: 'Get the best out of home tuition for cooking',
  image: {webp:  cookingWebp, jpeg: cookingJpeg},
  text: 'Which is your favorite meal? Suppose, a the person who prepares it for you or all vendors' +
      ' who prepare it stop to exist, will you miss your favorite meal simply because you don’t ' +
      'know how to prepare it or are you the type who knows how to prepare his/her favorite meal' +
      ' on your own? Whether you know how to prepare it or not, there is someone who thought of ' +
      'inventing the method of preparing that meal.',
  num: 5, alt: "music-blog", key: 'b2',
  url: "https://rabbiits.wordpress.com/2019/10/23/get-the-best-out-of-home-tuition-for-cooking/"
};
const friends ={
  title: 'Plus Friends',
  image: {webp: friendsWebp, jpeg : friendsJpeg},
  text: 'Friends, have you ever thought of life on your own? Solitude thoughts. Well, I mean life ' +
      'with no friends nor family. A world of your own. Does it even add up? According to me it doesn’t.' +
      'School life is not always about academics alone. Imagine a world of self-centered professionals, ' +
      'them that only think of succeeding alone. How then will unity be achieved when everyone else' +
      ' want to better themselves without consideration of others? A lot have been said about' +
      ' corruption, with it; numerous ways of curbing it.',
  num: 6, alt: "language-blog", key: 'b3',
  url: "https://rabbiits.wordpress.com/2019/07/26/plus-friends/"
};

const blogs = [
  mentor, cooking, friends
];

export default blogs;
