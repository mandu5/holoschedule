import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

interface IHoloLive {
  id: 34;
  yt_channel_id: "string";
  bb_space_id: "string";
  name: "Choco Ch. 癒月ちょこ";
  description: "string";
  photo: "https://yt3.ggpht.com/a/AATXAJw7R8J8buhX7Cw1m63vK2jlKFv-9YhFf-TQaA=s800-c-k-c0xffffffff-no-rj-mo";
  published_at: "2018-04-25T02:45:48.000Z";
  twitter_link: "yuzukichococh";
}

function Channel() {
  const [main, setMain] = useState("main");
  const { yt_channel_id } = useParams();
  const [live, setLive] = useState<IHoloLive[]>([]);
  //const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.holotools.app/v1/channels/youtube/${yt_channel_id}`
      );
      const json = await response.json();
      //setLoading(false);
      setLive(json);
    })();
  });
  console.log(live);
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          {/* {live?.map((item) => (
            <div key={item.id}>
              <img alt="img" src={`${item.id}`} />
              <div className="title">{item.id}</div>
              <div className="channelName">{item.name}</div>
            </div>
          ))} */}
          <p>{yt_channel_id}</p>
          <p>{live}</p>
          <Head>Channel</Head>
          <h1>유튜브 프로파일/채널 불러오기 api</h1>
        </Main>
      </div>
    </>
  );
}
export default Channel;
