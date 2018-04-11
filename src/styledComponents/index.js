import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const appendItemAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-300px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: ${props => (props.color ? "white" : "black")};
  color: ${props => (props.color ? "black" : "white")};
`;

const HeaderWrapper = styled.header`
  background-color: rgb(227, 108, 70);
  height: 50px;
  z-index: 100;
  transform: translateZ(0px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  padding: 0px 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.34) 0px 3px 6px;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const HeaderLink = styled(Link)`
  color: white;
  padding: 10px;
  text-decoration: none;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: black;
`;

const MainStories = styled.div`
  padding: 20px 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
`;

const RowStory = styled.div`
  padding: 14px 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  position: relative;
  background-color: rgb(238, 238, 238);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.34) 0px 3px 6px;
  opacity: 0;
  animation: ${appendItemAnimation} 0.3s linear forwards;
`;

const RowStoryScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgb(227, 108, 70);
`;

const RowStoryTitle = styled.div`
  padding: 10px;
`;

const HeaderImageDiv = styled.div``;

export {
  Wrapper,
  HeaderWrapper,
  HeaderNav,
  HeaderImageDiv,
  HeaderLink,
  MainWrapper,
  MainStories,
  RowStory,
  RowStoryScore,
  RowStoryTitle
};
