import React from 'react';
import { CookiesProvider } from 'react-cookie';
import backDropHandler from "./events/backdrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";
import SocialIcons from "./components/SocialIcons";
import SocialButtons from "./components/SocialButtons";
import TrendingSection from "./components/Trending";
import BlogsSection from "./components/Blogs";
import Landing from "./components/Landing";

function App() {
  return (
      <CookiesProvider>
        <NavBar/>
        <SocialIcons/>
        <SocialButtons/>
        <main className={'jpeg'} id={'main'}>
          <Landing/>
          <TrendingSection/>
          <BlogsSection/>
        </main>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </CookiesProvider>
  );
}

export default App;
