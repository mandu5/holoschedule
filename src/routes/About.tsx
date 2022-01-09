import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom } from "../atoms";
import QNA from "../components/QNA";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.bgColor};
  .tabs {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 10px;
  }
  .title {
    color: ${(props) => props.theme.textColor};
  }
`;
const Box = styled.div`
  background: ${(props) => props.theme.tabColor};
  box-shadow: ${(props) => props.theme.shadowColor} 0px 8px 20px 0px;
  .login {
    margin-top: 60px;
  }
`;
const FAQ = styled.div`
  .accordion {
    width: 100%auto;
    color: #fff;
    a {
      color: #83d0e7;
      text-decoration: underline;
    }
  }
`;
const Title = styled.div`
  font-size: 25px;
  margin-top: -15px;
  color: ${(props) => props.theme.textColor};
  width: 100%;
`;
const ContentBx = styled.div`
  position: relative;
  margin: 10px;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
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
  .login {
    margin-top: 50px;
  }
  .label {
    position: relative;
    padding: 10px;
    background: ${(props) => props.theme.toggleColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
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
const Content = styled.div`
  font-size: 15px;
  margin-top: 10px;
  span {
    font-size: 18px;
    color: ${(props) => props.theme.hyperlinkColor};
    line-height: 24px;
  }
  ul {
    margin-top: 5px;
  }
  div {
    margin-top: 20px;
    a {
      color: ${(props) => props.theme.hyperlinkColor};
      text-decoration: underline;
    }
  }
`;
const Login = styled.div``;

interface Iuser {
  userObj: null;
}

const About = ({ userObj }: Iuser) => {
  const [main, setMain] = useState("main");
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const [accordion, setAccordion] = useState(["tab", "tab", "tab", "tab"]);
  let tabs = [...accordion];
  const changeClass = () => {
    tabs[0] === "tab" ? (tabs[0] = "tab active") : (tabs[0] = "tab");
    setAccordion(tabs);
  };
  const changeClass1 = () => {
    tabs[1] === "tab" ? (tabs[1] = "tab active") : (tabs[1] = "tab");
    setAccordion(tabs);
  };
  const changeClass2 = () => {
    tabs[2] === "tab" ? (tabs[2] = "tab active") : (tabs[2] = "tab");
    setAccordion(tabs);
  };
  const changeClass3 = () => {
    tabs[3] === "tab" ? (tabs[3] = "tab active") : (tabs[3] = "tab");
    setAccordion(tabs);
  };
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <div className="tabs">
            <h2 className="title">About</h2>
            <Box className="boards" id="scroll">
              <FAQ>
                <Title>FAQ</Title>
                <div className="accordion">
                  <ContentBx className={accordion[0]} onClick={changeClass}>
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
                  <ContentBx className={accordion[1]} onClick={changeClass1}>
                    <div className="label">
                      My favorites list disappeared / I cannot favorite
                    </div>
                    <div className="content">
                      Please make sure you are logged in and visit the channels
                      favorites tab to force a refresh.
                    </div>
                  </ContentBx>
                  <ContentBx className={accordion[2]} onClick={changeClass2}>
                    <div className="label">
                      I have feedback/want to contribute to this project
                    </div>
                    <div className="content">
                      All help and ideas are welcome! Please contact us with QNA
                      section to gain access to backend source, or simply chat
                      about your ideas.
                    </div>
                  </ContentBx>
                  <ContentBx className={accordion[3]} onClick={changeClass3}>
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
            <Box className="boards">
              {isLoggedIn ? (
                <>
                  <Title>Dashboard</Title>
                  <QNA userObj={userObj} />
                </>
              ) : (
                <>
                  <Title>Dashboard</Title>
                  <div className="login">
                    <Login className="button" as={Link} to={"/login"}>
                      Login
                    </Login>
                  </div>
                </>
              )}
            </Box>
            <Box className="media">
              <div>
                <Title>Channel log</Title>
                <Content>
                  <span>1.0.1 Holo Schedules [December 11, 2021]</span>
                  <ul>
                    <li>Added search bar and card view to Channel page</li>
                    <li>Added loading screen and errors to all the pages</li>
                  </ul>
                  <span>1.0.2 Holo Schedules [January 10, 2022]</span>
                  <ul>
                    <li>Added Dashboard and Themes</li>
                  </ul>
                </Content>
              </div>
            </Box>
            <Box className="media">
              <div>
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
              </div>
            </Box>
          </div>
        </Main>
      </div>
    </>
  );
};
export default About;
