import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Cubes from "../components/Cubes";
// import { isLikedAtom } from "../atoms";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: ${(props) => props.theme.bgColor};
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
    transition: 0.5s;
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
// const Heart = styled.div`
//   color: red;
//   font-size: 25px;
//   width: 15px;
//   height: 20px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.5);
//     opacity: 0.5;
//   }
// `;
const Description = styled.div`
  font-size: 5px;
  font-weight: 0;
  position: absolute;
  margin-top: 180px;
  margin-left: 10px;
`;

function Channel() {
  const [main, setMain] = useState("main");
  const { yt_channel_id } = useParams();
  const [channel, setChannel] = useState([]);
  // const isLiked = useRecoilValue(isLikedAtom);
  // const setIsLiked = useSetRecoilState(isLikedAtom);
  // const [heart, setHeart] = useState("🖤");

  // for (let i = 0; i < localStorage.length; i++) {
  //   n = [(`${localStorage.getItem(localStorage.key(i))}`)];
  // }
  // let n = [channel.name];
  // let local = [(localStorage.getItem("liked"))] || [];
  // let a = local.push(n);
  // const onLiked = () => {
  //   if (isLiked) {
  //     setIsLiked(false);
  //     // localStorage.removeItem(`liked`);
  //     setHeart("🖤");
  //   } else {
  //     setIsLiked(true);
  //     localStorage.setItem("liked", a);
  //     setHeart("❤️");
  //   }
  // };
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
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <Cubes />
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={`${channel.photo}`} alt="proImg" />
              </div>
              <div className="details">
                <h1 className="name">{channel.name}</h1>
                {/* <Heart onClick={onLiked}>{heart}</Heart> */}
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
