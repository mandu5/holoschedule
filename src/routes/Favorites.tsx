import { Button } from "@material-ui/core";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { HeaderDetails } from "../components/HeaderDetails";
import { NavLi } from "../components/NavLi";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Navigation = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  background: #83d0e7;
  border-left: 10px solid #83d0e7;
  transition: 0.5s;
  overflow: hidden;
  .button {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    min-width: 55px;
    left: 4px;
    color: #fff;
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
    top: 0;
    left: 0;
    width: 100%;
    li {
      position: relative;
      width: 100%;
      list-style: none;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      &:hover {
        background: #fff;
        a {
          color: #287bff;
          &::before {
            content: "";
            position: absolute;
            right: 0;
            top: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px 35px 0 10px #fff;
            pointer-events: none;
          }
          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px #fff;
            pointer-events: none;
          }
        }
      }
      &:nth-child(1) {
        margin-bottom: 40px;
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
const Toggle = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  min-width: 55px;
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
  @media (max-width: 480px) {
    z-index: 10001;
  }
`;
const Icon2 = styled.span`
  position: absolute;
  top: 9px;
  margin-right: 1px;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: #fff;
`;
const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: #000;
  color: white;
  transition: 0.5s;
  &.active {
    width: calc(100% - 80px);
    left: 80px;
    .toggle {
      @media (max-width: 991px) {
        visibility: hidden;
        transition: 0.01s;
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
`;
const Topbar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #49c8f0;
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

function Favorites() {
  const [navigation, setNavigation] = useState("navigation");
  const [main, setMain] = useState("main");
  const changeToggle = () => {
    setNavigation(
      navigation === "navigation" ? "navigation active" : "navigation"
    );
    setMain(main === "main" ? "main active" : "main");
  };
  return (
    <>
      <Wrapper>
          <Container>
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
            <Main className={main}>
              <Topbar>
                <Button className="button">
                  <Toggle className="toggle" onClick={changeToggle}>
                    <Icon2>
                      <BiMenu />
                    </Icon2>
                  </Toggle>
                </Button>
                <HeaderDetails />
              </Topbar>
              <h1>로그인후 좋아하는 채널 미리보기</h1>
            </Main>
          </Container>
        </Wrapper>
    </>
  );
}
export default Favorites;