import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TrendingView from "./components/TrendingView";
import backDropHandler from "./events/backDrop";
import SideBar from "./components/mobile/sideBar";
import NavBar from "./components/mobile/navBar";
import MobileFooter from "./components/mobile/footer";
import SignUpModal from "./components/signUpModal";
import texts from "./constants/texts";

function App() {
  return (
      <Router>
        <NavBar/>
        <TrendingView/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <div className="our-services hidden">
          <a className="nav-sub-item" href="https://www.rabbii.co.ke/#teecha">
            {texts.ourServices[0]}
          </a>
        </div>
        <MobileFooter/>
      </Router>
  );
}

export default App;
