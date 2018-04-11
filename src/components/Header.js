import React from "react";

import {
  HeaderWrapper,
  HeaderNav,
  HeaderImageDiv,
  HeaderLink
} from "../styledComponents";
import logoImage from "../assets/newspaper.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImageDiv>
        <img src={logoImage} alt="None" width="45px" />
      </HeaderImageDiv>
      <HeaderNav>
        <HeaderLink to="/">Home</HeaderLink>

        <HeaderLink to="/top">Top</HeaderLink>

        <HeaderLink to="/new">New</HeaderLink>

        <HeaderLink to="/story/23">Story</HeaderLink>
      </HeaderNav>
      <div> X </div>
    </HeaderWrapper>
  );
};

export default Header;
