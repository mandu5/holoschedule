import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom } from "../atoms";
import QNA from "../components/QNA";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 92.5vh;
  color: ${(props) => props.theme.textColor};
  transition: 0.3s;
  background: ${(props) => props.theme.bgColor};
  &.active {
    width: calc(100% - 80px);
    left: 80px;
    .boxes {
      position: absolute;
      transition: 0.3s;
      transform: translate(-10%, 0%);
    }
    @media (max-width: 991px) {
      left: 300px;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    left: 0;
  }
  .boxes {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    box-shadow: 0 0px 10px ${(props) => props.theme.shadowColor};
    border-radius: 10px;
    background: ${(props) => props.theme.tabColor};
    h2 {
      margin: 0 0 30px;
      padding: 0;
      font-size: 30px;
      font-weight: 500;
      color: #fff;
      text-align: center;
    }
  }
  @media (max-width: 1083px) {
    .media {
      visibility: hidden;
    }
    .boards {
      width: 50%;
    }
  }
`;
const Box = styled.div`
  position: relative;
  float: left;
  top: 20%;
  left: 27%;
  width: 42%;
  margin-bottom: 30px;
  margin-right: 50px;
  height: 40%;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 0px 10px ${(props) => props.theme.shadowColor};
  border-radius: 10px;
  background: ${(props) => props.theme.tabColor};
  overflow: scroll;
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
const ContentBx = styled.div`
  position: relative;
  margin: 10px;
  margin-right: 25px;
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
const Title = styled.div`
  font-size: 25px;
  margin-top: -15px;
  color: ${(props) => props.theme.textColor};
  width: 100%;
`;
const Content = styled.div`
  font-size: 15px;
  margin-top: 10px;
  span {
    font-size: 18px;
    color: ${(props) => props.theme.hyperlinkColor};
    line-height: 24px;
  }
  div {
    margin-top: 20px;
    margin-bottom: 20px;
    a {
      color: ${(props) => props.theme.hyperlinkColor};
      text-decoration: underline;
    }
  }
`;
const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: #bccbde;
  background-color: #151617;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
  border-radius: 4px;
  transition: 0.5s;
  border: 0;
  &:hover {
    background: #bccbde;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
      0 0 100px #bccbde;
  }
`;
interface Iuser {
  userObj: null;
}

const About = ({ userObj }: Iuser) => {
  const [main, setMain] = useState("main");
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
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
          <div className="boxes">
            <h2>About</h2>
            <Box className="boards">
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
                      All help and ideas are welcome! Please contact us with QNA
                      section to gain access to backend source, or simply chat
                      about your ideas.
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
                    <Login as={Link} to={"/login"}>
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
                    <li>
                      Added sorting options and card view to Channels page
                    </li>
                    <li>Added loading screen and errors to all the pages</li>
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
