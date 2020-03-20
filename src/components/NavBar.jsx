import React from "react";
import Icon from "./basic/Icon";
import toggle from "../assets/icons/menu.svg"
import Button from "./basic/Button";
import texts from "../constants/texts";
import menuToggle from "../events/menu-toggle";
import signUpHandler from "../events/sign-up";
import logo from "../assets/icons/logo.svg";

const Logo = (props) => {
  return (
      <a href={texts.menuLinks[0]}>
        <Icon src={logo} className={props.className} height={props.height} units={props.units}/>
      </a>
  );
};

class NavBar extends React.Component {
  render() {
    return (
      <nav id="nav-bar">
        <Logo className="logo" height={3} units={'rem'}/>
        <span className="nav">
          <a className="nav-item" href={texts.menuLinks[0]}>
                <span className={'text'}>{texts.menuItems[0]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item"  href={texts.menuLinks[1]}>
                <span className={'text'}>{texts.menuItems[1]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[2]}>
                <span className={'text'}>{texts.menuItems[2]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[3]}>
                <span className={'text'}>{texts.menuItems[3]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href={texts.menuLinks[4]}>
                <span className={'text'}>{texts.menuItems[4]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item active" href={"#main"}>
                <span className={'text'}>{texts.menuItems[5]}</span>
              <span className={'active'}>&nbsp;</span>
            </a>
        </span>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </nav>
    );
  }
}

export default NavBar;
