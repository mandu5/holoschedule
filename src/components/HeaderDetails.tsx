import { useEffect, useRef, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { MdScheduleSend } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoggedInAtom, searchTypedAtom } from "../atoms";
import { authService } from "../myBase";

const Logo = styled.div`
  font-size: 23px;
  display: flex;
  position: relative;
  text-align: start;
  margin-left: 140px;
  white-space: nowrap;
  color: ${(props) => props.theme.textColor};
  &.active {
    margin-left: 150px;
  }
`;
const Search = styled.div`
  position: relative;
  width: 400px;
  margin: 0 10px;
  margin-left: 50px;
  label {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      padding: 5px 20px;
      padding-left: 35px;
      font-size: 18px;
      outline: none;
      border: none;
      background-color: ${(props) => props.theme.searchColor};
      color: ${(props) => props.theme.textColor};
      
    }
  }
`;
const Icon3 = styled.span`
  position: absolute;
  top: -1px;
  left: 10px;
  font-size: 1.2em;
  color: ${(props) => props.theme.textColor};
`;
const Toggle = styled.div`
  position: relative;
  margin-left: 200px;
  .profile {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const Menu = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  width: 200px;
  padding: 10px 20px;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.tabColor};
  box-shadow: ${(props) => props.theme.shadowColor} 0px 8px 20px 0px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.5s;
  visibility: hidden;
  z-index: 1;
  &.active {
    top: 60px;
    visibility: visible;
  }
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 5px;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.tabColor};
    transform: rotate(45deg);
  }
  ul {
    cursor: pointer;
    li {
      position: relative;
      list-style: none;
      padding: 10px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      font-size: 18px;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      border: 0;
      outline: 0;
      span {
        margin-left: 15px;
      }
      &:hover {
        color: ${(props) => props.theme.hyperlinkColor};
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
  let useClickOutside = (handler:any) => {
    let domNode:any = useRef();

    useEffect(() => {
      let aHandler = (event:any) => {
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
  const setSearch = useSetRecoilState(searchTypedAtom);
  const searchSpace = (event:any) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };
  return (
    <>
      <Logo>
        <Link to="/">
          <div>
            <MdScheduleSend />
            <span> Holo Schedule</span>
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
      <Toggle ref={domNode}>
        <CgProfile className="profile" onClick={menuToggle} />
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
