import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UI } from "../components/UI";
import { authService } from "../myBase";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  color: ${(props) => props.theme.textColor};
  transition: 0.3s;
  background: ${(props) => props.theme.bgColor};
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
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
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
    form {
      .a {

        background-color: #000;
        position: relative;
        padding: 10px 20px;
        color: #03e9f4;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        margin-top: 40px;
        margin-left: 90px;
        letter-spacing: 4px;
        border: 0;
        border-radius: 4px;
        &:hover {
          background: #03e9f4;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 100px #03e9f4;
        }
      }
    }
  }
`;

function AccountSetting() {
  const [main, setMain] = useState("main");
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <div className="login-box">
            <h2>Account Setting</h2>
            <form>
              <Link to="/">
                <input
                  onClick={onLogOutClick}
                  className="a"
                  type="submit"
                  value={"Log Out"}
                />
              </Link>
            </form>
          </div>
        </Main>
      </div>
    </>
  );
}
export default AccountSetting;
