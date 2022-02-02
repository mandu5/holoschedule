import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  background: ${(props) =>props.theme.bgColor};
  color: #fff;
`;
const Head = styled.div``;

function Multiview() {
  const [main, setMain] = useState("main");
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <Head>Timeline</Head>
          <h1>Timeline (시간표)</h1>
        </Main>
      </div>
    </>
  );
}
export default Multiview;
