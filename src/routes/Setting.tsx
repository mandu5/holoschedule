import { useState } from "react";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";


const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: #000;
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
const Head = styled.div``;

function Setting() {
  const [main, setMain] = useState("main");
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <Head>Setting</Head>
          <h1>
            1.언어번역 2.다크모드 3.캐릭터별 색상 헤더 theme.ts 4.전체 세팅
            리셋버튼
          </h1>
        </Main>
      </div>
    </>
  );
}
export default Setting;