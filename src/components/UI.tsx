import { Button } from "@material-ui/core";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { HeaderDetails } from "./HeaderDetails";
import { NavLi } from "./NavLi";

const Navigation = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background: linear-gradient(#83d0e7, #cce0e6);
  border-left: 10px solid #83d0e7;
  transition: 0.3s;
  overflow: hidden;
  .button {
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
    left: -300px;
  }
  @media (max-width: 480px) {
    width: 100%;
    left: -100%;
    z-index: 1000;
  }
  &.active {
    width: 80px;
    @media (max-width: 991px) {
      width: 300px;
      left: 0;
    }
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
        background: #dfe5e8;
        a {
          color: #83d0e7;
        }
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
  background: linear-gradient(#49c8f0, #98dbf0);
  color: #fff;
  width: calc(100% - 300px);
  left: 300px;
  transition: 0.3s;
  &.active {
    width: calc(100% - 80px);
    left: 80px;
    .toggle {
      @media (max-width: 991px) {
        visibility: hidden;
        transition: 0.001s;
      }
    }
    @media (max-width: 991px) {
      left: 300px;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    left: 0;
  }
  @media (max-width: 650px) {
    display: fixed;
  }
  .button {
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
      background-color: #49c8f0;
      &:hover {
        background-color: #72cde9;
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
  background-color: #83d0e7;
  cursor: pointer;
  &:hover {
    background-color: #abd9e7;
  }
`;
const Icon2 = styled.span`
  position: absolute;
  top: 7px;
  margin-right: 1px;
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
          <Button className="button">
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
        <Button className="button">
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