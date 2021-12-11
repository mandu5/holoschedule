import { useState } from "react";
import styled from "styled-components";
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

const Head = styled.div``;
const FaQ = styled.div``;
const Qna = styled.div``;
const Log = styled.div``;
const Credits = styled.div``;

function About() {
  const [main, setMain] = useState("main");
  return (
    <>
      <Wrapper>
        <UI setMain={setMain} />
        <Main className={main}>
          <Head>About</Head>
          <FaQ>FaQ</FaQ>
          <Qna>Qna</Qna>
          <Log>Channel log</Log>
          <Credits>
            Credits: This is a fan made website and the content found on this
            website is owned by Cover corp and its partners. The site follows
            the guidelines set forth by Cover corp in their{" "}
            <a>Derivative Work License Agreement</a>
          </Credits>
        </Main>
      </Wrapper>
    </>
  );
}
export default About;
