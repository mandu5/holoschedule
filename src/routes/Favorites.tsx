import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
//import { isLikedAtom, namesAtom } from "../atoms";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
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
const Head = styled.div``;

interface IHolo {
  name: "string";
}

function Favorites() {
  const [main, setMain] = useState("main");
  // const names = useRecoilValue(namesAtom);
  // console.log(names)
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <Head>Favorites</Head>
          {/* <h1>{names}</h1> */}
          <h1> 좋아하는 채널 미리보기</h1>
        </Main>
      </div>
    </>
  );
}
export default Favorites;
