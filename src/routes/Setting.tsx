import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
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
  @media (max-width: 1083px) {
    .boards {
      position: relative;
      margin-left: 25%;
    }
  }
`;
const Box = styled.div`
  box-shadow: 0 0px 10px ${(props) => props.theme.shadowColor};
  background: ${(props) => props.theme.tabColor};
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
  const IsDark = useRecoilValue(isDarkAtom);
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
                {IsDark ? "Light Mode" : "Dark Mode"}
              </button>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Box>
            <Box className="boards" id="square">
              <Title>Languages</Title>
            </Box>
          </div>
        </Main>
      </div>
    </>
  );
}
export default Setting;
