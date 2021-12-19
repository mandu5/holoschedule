import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";
import { authService, firebaseInstance } from "../myBase";

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
        transition: 0.5s;
      }
    }
    form {
      #google {
        background-color: #ea4335;
      }
      #facebook {
        background-color: #3b5998;
      }
      .a {
        background-color: #000;
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #bccbde;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.5s;
        margin-top: 40px;
        letter-spacing: 4px;
        border: 0;
        border-radius: 4px;
        span {
          position: absolute;
          display: block;
        }
        &:hover {
          background: #bccbde;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
            0 0 100px #bccbde;
        }
      }
    }
  }
`;

function LoginPage() { 
  const [main, setMain] = useState("main");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
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
        <Main className={main}>
          <div className="login-box">
            <h2>Login</h2>
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
                className="a"
                type="submit"
                value={newAccount ? "Create Account" : "Log In"}
              />
              <button
                id="google"
                className="a"
                onClick={onSocialClick}
                name="google"
              >
                Continue with Google
              </button>
              <button
                id="facebook"
                className="a"
                onClick={onSocialClick}
                name="facebook"
              >
                Continue with Facebook
              </button>
              <button className="a" onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
              </button>
            </form>
          </div>
        </Main>
      </div>
    </>
  );
}
export default LoginPage;
