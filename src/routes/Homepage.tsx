import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Upcoming } from "../components/Upcoming";
import { Live } from "../components/Live";
import { UI } from "../components/UI";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100%;
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

function Homepage() {
  const [main, setMain] = useState("main");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Holo Schedules</title>
      </Helmet>
      <Wrapper>
        <UI setMain={setMain} />
        <Main className={main}>
          <Live />
          <Upcoming />
        </Main>
      </Wrapper>
    </>
  );
}

export default Homepage;
