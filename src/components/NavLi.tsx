import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
  font-size: 1.75em;
`;
const Title = styled.span`
  position: relative;
  display: block;
  padding: 0 auto;
  height: 30px;
  line-height: 60px;
  font-size: 30px;
  margin-left: 10px;
  text-align: start;
  white-space: nowrap;
`;

export function NavLi() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const onMouseOver1 = () => {
    setHover1(true);
  };
  const onMouseOver2 = () => {
    setHover2(true);
  };
  const onMouseOver3 = () => {
    setHover3(true);
  };
  const onMouseOver4 = () => {
    setHover4(true);
  };
  const onMouseOver5 = () => {
    setHover5(true);
  };
  const onMouseOut1 = () => {
    setHover1(false);
  };
  const onMouseOut2 = () => {
    setHover2(false);
  };
  const onMouseOut3 = () => {
    setHover3(false);
  };
  const onMouseOut4 = () => {
    setHover4(false);
  };
  const onMouseOut5 = () => {
    setHover5(false);
  };
  return (
    <>
      <li
        className={hover1 ? "hovered" : ""}
        onMouseOver={onMouseOver1}
        onMouseOut={onMouseOut1}
      >
        <Link to="/">
          <Icon>
            <HiOutlineHome />
          </Icon>
          <Title>Home</Title>
        </Link>
      </li>
      <li
        className={hover2 ? "hovered" : ""}
        onMouseOver={onMouseOver2}
        onMouseOut={onMouseOut2}
      >
        <Link to="/favorites/:loginId">
          <Icon>
            <MdOutlineFavoriteBorder />
          </Icon>
          <Title>Favorites</Title>
        </Link>
      </li>
      <li
        className={hover3 ? "hovered" : ""}
        onMouseOver={onMouseOver3}
        onMouseOut={onMouseOut3}
      >
        <Link to={"/multiview"}>
          <Icon>
            <CgProfile />
          </Icon>
          <Title>Multiview</Title>
        </Link>
      </li>
      <li
        className={hover4 ? "hovered" : ""}
        onMouseOver={onMouseOver4}
        onMouseOut={onMouseOut4}
      >
        <Link to={`/setting`}>
          <Icon>
            <AiOutlineSetting />
          </Icon>
          <Title>Setting</Title>
        </Link>
      </li>
      <li
        className={hover5 ? "hovered" : ""}
        onMouseOver={onMouseOver5}
        onMouseOut={onMouseOut5}
      >
        <Link to={`/about`}>
          <Icon>
            <FcAbout />
          </Icon>
          <Title>About</Title>
        </Link>
      </li>
    </>
  );
}