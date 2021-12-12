import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineSupervisorAccount, MdScheduleSend } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
  font-size: 25px;
  margin-top: 5px;

  display: flex;
  position: relative;
  text-align: start;
  white-space: nowrap;
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
const UserCircle = styled.div`
  position: fixed;
  width: 57px;
  height: 57px;
  min-width: 57px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #49c8f0;
  cursor: pointer;
  &:hover {
    background-color: #72cde9;
  }
  @media (max-width: 850px) {
    visibility: hidden;
  }
`;
const User = styled.div`
  position: relative;
  top: 5px;
  font-size: 2.5em;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
const Icon3 = styled.span`
  position: absolute;
  top: -1px;
  left: 10px;
  font-size: 1.2em;
  color: black;
`;
export function HeaderDetails() {
  return (
    <>
      <Logo>
        <Link to="/">
          <div>
            <MdScheduleSend />
            Holo Schedule
          </div>
        </Link>
      </Logo>
      <Search>
        <label>
          <input type="text" placeholder="Search here" />
          <Icon3>
            <BiSearchAlt2 />
          </Icon3>
        </label>
      </Search>
      <UserCircle>
        <User>
          <MdOutlineSupervisorAccount />
        </User>
      </UserCircle>
    </>
  );
}
