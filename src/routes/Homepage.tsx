import { useState } from "react";
import styled from "styled-components";
import { Upcoming } from "../components/Upcoming";
import { Live } from "../components/Live";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  background: ${(props) => props.theme.bgColor};
  color: #fff;
`;

function Homepage() {
  const [main, setMain] = useState("main");
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <Live />
          <Upcoming />
        </Main>
      </div>
    </>
  );
}

export default Homepage;
