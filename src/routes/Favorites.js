import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 92.5vh;
  background: ${(props) => props.theme.bgColor};
  color: white;
  transition: 0.3s;
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
        <Main className={main}>
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
