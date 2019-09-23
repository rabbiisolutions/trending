import Icon from "./icon";
import React from "react";

const SocialLink = (props) => {
  return (
      <a href={props.href} title={props.title}><Icon src={props.src} height={2.5} width={2.5} className={props.className}/></a>
      );
};

export default SocialLink;
