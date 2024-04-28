import React from "react";
import logotype from "../assets/logo.svg";

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header id="top">
      <img src={logotype} alt="Logo" />
    </header>
  );
};
