import { Button } from "@material-ui/core";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { HeaderDetails } from "./HeaderDetails";
import { NavLi } from "./NavLi";

const Navigation = styled.div`
  position: fixed;
  height: 100%;
  background: ${(props) => props.theme.navColor};
  transition: 0.3s;
  box-shadow: ${(props) => props.theme.shadowColor} 0px 8px 20px 0px;
  .dropdown {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    min-width: 50px;
    left: 5.5px;
    top: 3px;
    margin-bottom: 5px;
    color: #fff;
  }
  .buttons {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    width: 100%;
  }
  #hiddenToggle {
    margin-top: 1px;
    margin-left: 11px;
    margin-bottom: 6px;
  }
  @media (max-width: 991px) {
    width: 80px;
  }
  @media (max-width: 480px) {
    width: 100%;
    left: -100%;
    z-index: 1000;
  }
  &.active {
    width: 190px;
    z-index: 1;
    @media (max-width: 480px) {
      width: 100%;
      left: 0;
    }
  }
  ul {
    position: absolute;
    left: 0;
    width: 100%;
    li {
      position: relative;
      width: 100%;
      list-style: none;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      &:hover {
        background: ${(props) => props.theme.bgColor};
      }
      &:nth-child(1) {
        pointer-events: none;
      }
      a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
const Topbar = styled.div`
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 58px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.uiColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: #fff;
  transition: 0.3s;
  &.active {
    position: relative;
    .dropdown {
      visibility: hidden;
    }
  }
  .dropdown {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    min-width: 55px;
    left: 4px;
    color: #fff;
  }
`;
const Toggle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const Icon2 = styled.span`
  position: absolute;
  top: 6px;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
`;

export function UI(props: { setMain: (arg0: string) => void }) {
  const [navigation, setNavigation] = useState("navigation");
  const [main, setMain] = useState("main");
  const changeToggle = () => {
    setNavigation(
      navigation === "navigation" ? "navigation active" : "navigation"
    );
    setMain(main === "main" ? "main active" : "main");
    props.setMain(main === "main" ? "main active" : "main");
  };
  return (
    <>
      <Navigation className={navigation}>
        <ul>
          <Button id="hiddenToggle" className="dropdown">
            <Toggle className="toggle" onClick={changeToggle}>
              <Icon2>
                <BiMenu />
              </Icon2>
            </Toggle>
          </Button>
          <NavLi />
        </ul>
      </Navigation>
      <Topbar className={main}>
        <Button className="dropdown">
          <Toggle
            id="hiddenToggleTwo"
            className="toggle"
            onClick={changeToggle}
          >
            <Icon2> 
              <BiMenu />
            </Icon2>
          </Toggle>
        </Button>
        <HeaderDetails/>
      </Topbar>
    </>
  );
}
