import Icon from "../utils/icon";
import link from "../../icons/external-link-symbol.svg";
import ButtonLink from "../utils/ButtonLink";
import React from "react";

const MoreButton = () => {
  return (
      <ButtonLink icon={<Icon src={link} height={1.5} width={1.5}/>} value="more"/>
  );
};

export default MoreButton;
