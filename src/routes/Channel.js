import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Cubes from "../components/Cubes";
import { UI } from "../components/UI";
import "./pages.css";
import { useQuery } from "react-query";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.bgColor};
  .card {
    position: relative;
    width: 500px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    color: ${(props) => props.theme.textColor};
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.4);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.2);
      background: rgba(255, 255, 255, 0.2);
    }
    .content {
      position: relative;
      display: flex;
      margin-top: -140px;
      gap: 30px;
      .imgBx {
        position: relative;
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.1);
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .details {
        .name {
          font-size: 18px;
        }
        h1 {
          span {
            color: ${(props) => props.theme.textColor};
          }
        }
        .link {
          color: #49c8f0;
          text-decoration: underline;
        }
      }
    }
  }
`;
const Description = styled.div`
  font-size: 5px;
  font-weight: 0;
  position: absolute;
  margin-top: 180px;
  margin-left: 10px;
`;
const Likes = styled.div`
  display: block;
`;
// interface IChannel {
//   name: string;
//   photo: string;
//   view_count: number;
//   video_count: number;
//   subscriber_count: number;
//   published_at: string;
//   twitter_link: string;
//   description: string;
// }
function Channel() {
  const [main, setMain] = useState("main");
  const { yt_channel_id } = useParams();
  const [channel, setChannel] = useState([]);
  // const [channelLikes, setChannelLikes] = useState(0);
  // const isLiked = () => {
  //   setChannelLikes(channelLikes === 0 ? 1 : 0);
  // }
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.holotools.app/v1/channels/youtube/${yt_channel_id}`
      );
      const json = await response.json();
      setChannel(json);
    })();
  }, [yt_channel_id]);
  return (
    <>
      {/* {[channel].map((item) => (
        <div>
          <span>Live Now</span> {item.published_at} Watching
          <FontAwesomeIcon size={"2x"} icon={faHeart} onClick={isLiked} />
          <Likes>
            {channelLikes === 1 ? "1 like" : `${channelLikes} likes`}
          </Likes>
        </div>
      ))} */}
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <Cubes />
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={`${channel.photo}`} alt="proImg" />
              </div>
              <div className="details">
                <h1 className="name">{channel.name}</h1>
                {/* <FontAwesomeIcon size={"2x"} icon={faHeart} />
                <Likes>
                  {channelLikes === 1 ? "1 like" : `${channelLikes} likes`}
                </Likes> */}
                <br />
                <h1>
                  <span>View Count:</span> {channel.view_count}
                </h1>
                <h1>
                  <span>Subscriber Count:</span> {channel.subscriber_count}
                </h1>
                <h1>
                  <span>Video Count:</span> {channel.video_count}
                </h1>
                <h1>
                  <span>Debut:</span> {channel.published_at}
                </h1>
                <br />
                <a
                  className="link"
                  href={`https://twitter.com/${channel.twitter_link}`}
                >
                  Twitter: {channel.twitter_link}
                </a>
              </div>
            </div>
            <Description>{channel.description}</Description>
          </div>
        </Main>
      </div>
    </>
  );
}
export default Channel;
