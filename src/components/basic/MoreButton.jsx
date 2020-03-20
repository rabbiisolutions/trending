import Icon from "./Icon";
import link from "../../assets/icons/external-link.svg";
import ButtonLink from "./ButtonLink";
import React from "react";

const MoreButton = (props) => {
  return (
      <ButtonLink icon={<Icon src={link} height={1} width={1} units={'rem'} className="external"/>} value="more" link={props.link} className="more"/>
  );
};

export default MoreButton;
