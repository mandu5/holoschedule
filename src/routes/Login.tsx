import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";
import { authService, firebaseInstance } from "../myBase";

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
    border-radius: 5px;
    background: ${(props) => props.theme.tabColor};
    box-shadow: ${(props) => props.theme.shadowColor} 0px 8px 20px 0px;
    .user-box {
      position: relative;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
        &:focus ~ label,
        &:valid ~ label {
          top: -30px;
          left: 0;
          color: #03e9f4;
          font-size: 12px;
        }
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
      }
    }
    #google {
      background-color: #ea4335;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    #facebook {
      background-color: #3b5998;
      margin-bottom: 10px;
    }
  }
  .title {
    color: ${(props) => props.theme.textColor};
  }
`;

function LoginPage() {
  const [main, setMain] = useState("main");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event: any) => {
    const {
      target: { name },
    } = event;
    let provider: any;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <div className="login-box">
            <h2 className="title">Login</h2>
            <form onSubmit={onSubmit}>
              <div className="user-box">
                <input
                  name="email"
                  type="text"
                  required
                  value={email}
                  onChange={onChange}
                />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={onChange}
                />
                <label>Password</label>
              </div>
              {error}
              <input
                className="button"
                type="submit"
                value={newAccount ? "Create Account" : "Log In"}
              />
            </form>
            <button
              id="google"
              className="button"
              onClick={onSocialClick}
              name="google"
            >
              Continue with Google
            </button>
            <button
              id="facebook"
              className="button"
              onClick={onSocialClick}
              name="facebook"
            >
              Continue with Facebook
            </button>
            <button className="button" onClick={toggleAccount}>
              {newAccount ? "Sign In" : "Create Account"}
            </button>
          </div>
        </Main>
      </div>
    </>
  );
}

export default LoginPage;
