import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: relative;
  width: calc(100% - 300px);
  left: 300px;
  height: 0;
  background: ${(props) =>props.theme.bgColor};
  color: white;
  transition: 0.3s;
  display: flex;
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
  .video {
    width: 500px;
    height: 400px;
    @media (max-width: 991px) {
      height: 400px;
      width: 100%;
    }
  }
  h1 {
    color: red;
    height: 306px;
    float: left;
  }
  .chat {
    width: 300px;
    height: 706px;
    @media (max-width: 991px) {
      float: left;
      width: 100%;
      height: 306px;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    left: 0;
  }
`;
document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure"

function Stream() {
  const [main, setMain] = useState("main");
  const { yt_video } = useParams();
  return ( 
    <> 
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${yt_video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h1>title</h1>
          <iframe
            className="chat"
            src={`https://www.youtube.com/live_chat?v=${yt_video}&embed_domain=localhost`}
            frameBorder="0"
            title="Embeded chat"
          />
        </Main>
      </div>
    </>
  );
}
export default Stream;
