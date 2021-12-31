import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  height: 0;
  background: ${(props) => props.theme.bgColor};
  color: #fff;
  .video {
    width: calc(100% - 350px);
    height: 706px;
    @media (max-width: 991px) {
      height: 400px;
      width: 100%;
    }
  }
  .chat {
    width: 350px;
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

function Stream() {
  const [main, setMain] = useState("main");
  const { yt_video } = useParams();
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <iframe
            className="video"
            src={`https://www.youtube.com/embed/${yt_video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <iframe
            className="chat"
            src={`https://www.youtube.com/live_chat?v=${yt_video}&embed_domain=mandu0505.github.io`}
            frameBorder="0"
            title="Embeded chat"
          />
        </Main>
      </div>
    </>
  );
}
export default Stream;
