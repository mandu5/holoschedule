import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.bgColor};
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
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
    button {
      background-color: #000;
      padding: 10px 20px;
      color: #bccbde;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.5s;
      margin-top: 40px;
      margin-left: 70px;
      letter-spacing: 4px;
      border: 0;
      border-radius: 4px;
      &:hover {
        background: #bccbde;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
          0 0 100px #bccbde;
      }
    }
  }
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
          <div className="login-box">
            <h2>Setting</h2>
            <button onClick={themeChange}>
              {IsDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </Main>
      </div>
    </>
  );
}
export default Setting;
