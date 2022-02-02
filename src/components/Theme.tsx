import { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import Select from "react-select";
import { aqua } from "../theme";

const Toggle = styled.div`
  position: relative;
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
  /* position: absolute;
  top: 0px; */
  left: -20px;
  width: 250px;
  padding: 10px 20px;
  background: ${(props) => props.theme.uiColor};
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* transition: 0.2s; */
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
    right: 20px;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.uiColor};
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

export function Theme() {
  const [menu, setMenu] = useState("menu");
  const menuToggle = () => {
    setMenu(menu === "menu" ? "menu active" : "menu");
  };
  let useClickOutside = (handler: any) => {
    let domNode: any = useRef();

    useEffect(() => {
      let aHandler = (event: any) => {
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
  let colors = [
    {
      value: 1,
      label: "red",
    },
    {
      value: 2,
      label: "green",
    },
    {
      value: 3,
      label: "blue",
    },
    {
      value: 4,
      label: "white",
    },
  ];
  let [bgColor, setBgColor] = useState(colors[0].label);
  let ddlhandle = (e: any) => {
    setBgColor(e.label);
  };
  return (
    <>
      <Toggle ref={domNode} theme={aqua}>
        <CgProfile className="profile" onClick={menuToggle} />
        <Menu className={menu}>
          <style>{`body {background-color:` + bgColor + `;}`}</style>
          <Select options={colors} onChange={ddlhandle}></Select>
        </Menu>
      </Toggle>
    </>
  ); // theme으로 갈필요 없이 그냥 버튼 누르면 live랑 upcoming의 컬러를 변경하면됨
}
