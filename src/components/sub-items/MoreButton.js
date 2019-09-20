import Icon from "../utils/icon";
import link from "../../icons/external-link-symbol.svg";
import ButtonLink from "../utils/ButtonLink";
import React from "react";

const MoreButton = (props) => {
  return (
      <ButtonLink icon={<Icon src={link} height={1} width={1} className="external"/>} value="more" link={props.link}/>
  );
};

export default MoreButton;
