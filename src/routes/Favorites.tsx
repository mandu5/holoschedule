import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  background: ${(props) => props.theme.bgColor};
  color: #fff;
`;
// const Head = styled.div``;

function Favorites() {
  const [main, setMain] = useState("main");
  // let b = [];
  // for (let i = 0; i < localStorage.length; i++) {
  //   console.log(`${localStorage.getItem(localStorage.key(i))}`);
  // }
  // 배열형태말고 따로따로 가져와서 각자 이름에 맞춰서 정보 호출.
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          {/* <Head>Favorites</Head>
          {b?.map((item) => item)}
            
          {b} */}
          <h1>...준비중</h1>
        </Main>
      </div>
    </>
  );
}
export default Favorites;
