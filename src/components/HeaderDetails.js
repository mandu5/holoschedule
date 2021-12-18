import { useEffect, useRef, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { MdScheduleSend } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom, searchTypedAtom } from "../atoms";
import { authService } from "../myBase";
import img from "./img.jpg";

const Logo = styled.div`
  font-size: 25px;
  margin-top: 5px;
  display: flex;
  position: relative;
  text-align: start;
  white-space: nowrap;
  color: ${(props) => props.theme.textColor};
`;
const Search = styled.div`
  position: relative;
  width: 400px;
  margin: 0 10px;
  margin-right: 250px;
  label {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      border-radius: 40px;
      padding: 5px 20px;
      padding-left: 35px;
      font-size: 18px;
      outline: none;
      border: none;
    }
  }
`;
const Icon3 = styled.span`
  position: absolute;
  top: -1px;
  left: 10px;
  font-size: 1.2em;
  color: black;
`;
const Toggle = styled.div`
  position: relative;
  border-radius: 50%;
  .profile {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Menu = styled.div`
  position: absolute;
  top: 100px;
  right: -5px;
  width: 250px;
  padding: 10px 20px;
  background: #333;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.5s;
  visibility: hidden;
  z-index: 1;
  &.active {
    top: 80px;
    visibility: visible;
  }
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: #333;
    transform: rotate(45deg);
  }
  ul {
    cursor: pointer;
    li {
      position: relative;
      list-style: none;
      padding: 10px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      font-size: 20px;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      border: 0;
      outline: 0;
      span {
        margin-left: 15px;
      }
      &:hover {
        color: #49c8f0;
      }
    }
  }
`;
export function HeaderDetails() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let aHandler = (event) => {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", aHandler);
      return () => {
        document.addEventListener("mousedown", aHandler);
      };
    });
    return domNode;
  };
  let domNode = useClickOutside(() => {
    setMenu("menu");
  });
  const onLogOutClick = () => authService.signOut();

  // 검색
  const setSearch = useSetRecoilState(searchTypedAtom);
  const searchSpace = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };
  return (
    <>
      <Logo>
        <Link to="/">
          <div>
            <MdScheduleSend />
            <span>Holo Schedule</span>
          </div>
        </Link>
      </Logo>
      <Search>
        <label>
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => searchSpace(e)}
          />
          <Icon3>
            <BiSearchAlt2 />
          </Icon3>
        </label>
      </Search>
      <Toggle className="action">
        <div ref={domNode} className="profile" onClick={menuToggle}>
          <img src={img} alt="img" />
        </div>
        <Menu className={menu}>
          {isLoggedIn ? (
            <>
              <ul>
                <Link to="/accountsetting">
                  <li>
                    <FiLogIn />
                    <span>Account Setting</span>
                  </li>
                </Link>
                <Link to="/setting">
                  <li>
                    <AiOutlineSetting />
                    <span>Setting</span>
                  </li>
                </Link>
                <Link to="/">
                  <li>
                    <AiOutlineSetting />
                    <span onClick={onLogOutClick}>Log Out</span>
                  </li>
                </Link>
              </ul>
            </>
          ) : (
            <>
              <ul>
                <Link to="/login">
                  <li>
                    <FiLogIn />
                    <span>Log In</span>
                  </li>
                </Link>
                <Link to="/setting">
                  <li>
                    <AiOutlineSetting />
                    <span>Setting</span>
                  </li>
                </Link>
              </ul>
            </>
          )}
        </Menu>
      </Toggle>
    </>
  );
}
