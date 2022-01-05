import { Button } from "@material-ui/core";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { HeaderDetails } from "./HeaderDetails";
import { NavLi } from "./NavLi";

const Navigation = styled.div`
  position: fixed;
  width: 80px;
  height: 100%;
  background: ${(props) => props.theme.uiColor};
  border-left: 10px solid ${(props) => props.theme.uiColor};
  transition: 0.3s;
  overflow: hidden;
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
    @media (max-width: 480px) {
      width: 100%;
      left: 0;
    }
  }
  ul {
    position: absolute;
    top: 3px;
    left: 0;
    width: 100%;
    li {
      position: relative;
      width: 100%;
      list-style: none;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      &:hover {
        background: ${(props) => props.theme.toggleColor};
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
  height: 58px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  /* background: linear-gradient(#49c8f0, #98dbf0); */
  background: ${(props) => props.theme.uiColor};
  color: #fff;
  width: calc(100% - 80px);
  left: 80px;
  transition: 0.3s;
  &.active {
    width: calc(100% - 190px);
    left: 190px;
    .toggle {
      @media (max-width: 991px) {
        visibility: hidden;
        transition: 0.001s;
      }
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    left: 0;
  }
  @media (max-width: 745px) {
    display: fixed;
  }
  .dropdown {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    min-width: 55px;
    left: 4px;
    color: #fff;
    visibility: hidden;
    @media (max-width: 991px) {
      visibility: hidden;
    }
  }
  .toggle {
    visibility: hidden;
    @media (max-width: 991px) {
      visibility: visible;
      &:hover {
        opacity: 0.5;
      }
    }
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
  color: ${(props) =>props.theme.textColor};
`;

export function UI(props: { setMain: (arg0: string) => void; }) {
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
          <Button className="dropdown">
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
          <Toggle className="toggle" onClick={changeToggle}>
            <Icon2>
              <BiMenu />
            </Icon2>
          </Toggle>
        </Button>
        <HeaderDetails />
      </Topbar>
    </>
  );
}
