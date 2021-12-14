import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  width: calc(100%);
  left: 300px;
  min-height: 100vh;
  background: ${(props) =>props.theme.bgColor};
  color: rgb(255, 255, 255);
  transition: 0.3s;
  &.active {
    width: calc(100% - 80px);
    left: 80px;
    background-color: black;
    transition: 0.3s;
    .boxes {
      margin-left: 110px;
      margin-right: 40px;
      transition: 0.3s;
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
const Head = styled.div`
  font-size: 35px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Box = styled.div`
  height: 250px;
  width: 540px;
  float: left;
  display: flex;
  color: #fff;
  background-color: #151414;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  overflow: scroll;
`;
const FAQ = styled.div`
  justify-content: center;
  align-items: center;
  .accordion {
    width: 540px;
    a {
      color: #83d0e7;
      text-decoration: underline;
    }
  }
`;
const ContentBx = styled.div`
  position: relative;
  margin: 10px 20px;
  &:hover {
    background: #555;
  }
  &.active {
    .content {
      height: 100px;
      padding: 10px;
    }
    .label::before {
      content: "-";
    }
  }
  .label {
    position: relative;
    padding: 10px;
    background: #333;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #555;
    }
    &::before {
      content: "+";
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      font-size: 1.5em;
    }
  }
  .content {
    position: relative;
    background: #000;
    height: 0;
    overflow: hidden;
    overflow-y: auto;
  }
`;
const QNA = styled.div``;
const Log = styled.div``;
const Credits = styled.div``;
const Title = styled.div`
  font-size: 25px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Content = styled.div`
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
  span {
    font-size: 18px;
    color: #49c8f0;
    line-height: 24px;
  }
  div {
    margin-top: 30px;
    margin-bottom: 30px;
    a {
      color: #83d0e7;
      text-decoration: underline;
    }
  }
`;

function About() {
  const [main, setMain] = useState("main");
  const [accordion, setAccordion] = useState("contentBx");
  const [accordion1, setAccordion1] = useState("contentBx");
  const [accordion2, setAccordion2] = useState("contentBx");
  const [accordion3, setAccordion3] = useState("contentBx");
  const changeClass = () => {
    setAccordion(accordion === "contentBx" ? "contentBx active" : "contentBx");
  };
  const changeClass1 = () => {
    setAccordion1(
      accordion1 === "contentBx" ? "contentBx active" : "contentBx"
    );
  };
  const changeClass2 = () => {
    setAccordion2(
      accordion2 === "contentBx" ? "contentBx active" : "contentBx"
    );
  };
  const changeClass3 = () => {
    setAccordion3(
      accordion3 === "contentBx" ? "contentBx active" : "contentBx"
    );
  };
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <Head>About</Head>
          <div className="boxes">
            <Box className="box">
              <FAQ>
                <Title>FAQ</Title>
                <div className="accordion">
                  <ContentBx id="1" className={accordion} onClick={changeClass}>
                    <div className="label">
                      My Youtube chat isn't logged in!
                    </div>
                    <div className="content">
                      Please disable the browser security feature known as 3rd
                      Party Cookies blocking, or whitelist this website and
                      youtube.com to allow 3rd Party Cookies.
                      <a href="https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection?redirectslug=disable-third-party-cookies">
                        Firefox instructions, other browsers may be similar.
                      </a>
                    </div>
                  </ContentBx>
                  <ContentBx
                    id="2"
                    className={accordion1}
                    onClick={changeClass1}
                  >
                    <div className="label">
                      My favorites list disappeared / I cannot favorite
                    </div>
                    <div className="content">
                      Please make sure you are logged in and visit the channels
                      favorites tab to force a refresh.
                    </div>
                  </ContentBx>
                  <ContentBx
                    id="3"
                    className={accordion2}
                    onClick={changeClass2}
                  >
                    <div className="label">
                      I have feedback/want to contribute to this project
                    </div>
                    <div className="content">
                      All help and ideas are welcome! The UI and Backend are
                      both available for contribution, although only the UI is
                      open source currently. Please contact us on discord to
                      gain access to backend source, or simply chat about your
                      ideas.
                    </div>
                  </ContentBx>
                  <ContentBx
                    id="4"
                    className={accordion3}
                    onClick={changeClass3}
                  >
                    <div className="label">
                      I'm a subber and I would like to have my channel removed
                      from Holo Schedule
                    </div>
                    <div className="content">
                      Sad to see you go :(, please let me know if there's any
                      issue I can help you with.
                    </div>
                  </ContentBx>
                </div>
              </FAQ>
            </Box>
            <Box>
              <QNA>
                <Title>QNA</Title>
                질문 할 수 있는 게시판 (게시판 만들기)
              </QNA>
            </Box>
            <Box>
              <Log>
                <Title>Channel log</Title>
                <Content>
                  <span>1.0.1 Holo Schedules [December 11, 2021]</span>
                  <ul>
                    <li>
                      Added sorting options and card view to Channels page
                    </li>
                    <li>Added loading screen and errors to all the pages</li>
                  </ul>
                </Content>
              </Log>
            </Box>
            <Box>
              <Credits>
                <Title>Credits</Title>
                <Content>
                  <div>
                    This is a fan made website and the content found on this
                    website is owned by Cover corp and its partners.
                  </div>
                  <div>
                    The site follows the guidelines set forth by Cover corp in
                    their
                    <a href="https://en.hololive.tv/terms">
                      Derivative Work License Agreement
                    </a>
                  </div>
                </Content>
              </Credits>
            </Box>
          </div>
        </Main>
      </div>
    </>
  );
}
export default About;
