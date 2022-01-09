import { AiOutlineSetting } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Icon = styled.span`
  position: relative;
  display: block;
  min-width: 60px;
  height: 40px;
  line-height: 50px;
  margin-left: 5px;
  text-align: center;
  font-size: 1.75em;
  color: ${(props) => props.theme.textColor};
`;
const Title = styled.span`
  position: relative;
  display: block;
  padding: 0 auto;
  height: 40px;
  line-height: 45px;
  font-size: 15px;
  margin-left: 3px;
  text-align: start;
  white-space: nowrap;
`;

export function NavLi() {
  return (
    <>
      <li>
        <Button className="buttons">
          <Link to="/">
            <Icon>
              <HiOutlineHome />
            </Icon>
            <Title>Home</Title>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="buttons">
          <Link to="/favorites">
            <Icon>
              <MdOutlineFavoriteBorder />
            </Icon>
            <Title>Favorites</Title>
          </Link>
        </Button>
      </li>
      {/* <li>
        <Button className="buttons">
          <Link to={"/multiview"}>
            <Icon>
              <CgProfile />
            </Icon>
            <Title>Multiview</Title>
          </Link>
        </Button>
      </li> */}
      {/* <li>
        <Button className="buttons">
          <Link to={"/multiview"}>
            <Icon>
              <CgProfile />
            </Icon>
            <Title>TimeLine</Title>
          </Link>
        </Button>
      </li> */}
      <li>
        <Button className="buttons">
          <Link to={`/setting`}>
            <Icon>
              <AiOutlineSetting />
            </Icon>
            <Title>Setting</Title>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="buttons">
          <Link to={`/about`}>
            <Icon>
              <FcAbout />
            </Icon>
            <Title>About</Title>
          </Link>
        </Button>
      </li>
    </>
  );
}
