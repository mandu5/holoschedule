import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
// import { Theme } from "../components/Theme";
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
const Title = styled.div`
  font-size: 25px;
  margin-top: -15px;
  color: ${(props) => props.theme.textColor};
  width: 100%;
`;

function Setting() {
  const [main, setMain] = useState("main");
  const isDark = useRecoilValue(isDarkAtom);
  const setIsDark = useSetRecoilState(isDarkAtom);
  const themeChange = () => {
    setIsDark((curr) => !curr);
  };
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <div className="tabs">
            <h2 className="title">Setting</h2>
            <Box className="boards" id="square">
              <Title>Site/Navigation</Title>
              <button className="button" onClick={themeChange}>
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
              {/* <Theme /> */}
            </Box>
            <Box className="boards" id="square">
              <Title>Languages</Title>
              <h1>준비중...</h1>
            </Box>
          </div>
        </Main>
      </div>
    </>
  );
}
export default Setting;
