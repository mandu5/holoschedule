import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
//import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { namesAtom } from "../atoms";
//import { isLikedAtom, namesAtom } from "../atoms";
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
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      background: #83d0e7;
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
const Heart = styled.div`
  color: red;
  font-size: 25px;
  width: 15px;
  height: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
    opacity: 0.5;
  }
`;
const Description = styled.div`
  font-size: 5px;
  font-weight: 0;
  position: absolute;
  margin-top: 180px;
  margin-left: 10px;
`;
interface IHolo {
  name: "string";
  description: "string";
  photo: "string";
  published_at: "string";
  twitter_link: "string";
  view_count: number;
  subscriber_count: number;
  video_count: number;
}

function Channel() {
  const [main, setMain] = useState("main");
  const { yt_channel_id } = useParams();
  const [name, setName] = useState<IHolo[]>([]);
  const [description, setDescription] = useState<IHolo[]>([]);
  const [photo, setPhoto] = useState<IHolo[]>([]);
  const [published_at, setPublished_at] = useState<IHolo[]>([]);
  const [view_count, setView_count] = useState<IHolo[]>([]);
  const [subscriber_count, setSubscriber_count] = useState<IHolo[]>([]);
  const [video_count, setVideo_count] = useState<IHolo[]>([]);
  const [twitter_link, setTwitter_link] = useState<IHolo[]>([]);
  // const setIsLiked = useSetRecoilState(isLikedAtom);
  // const setNames = useSetRecoilState(namesAtom);
  // const isLiked = useRecoilValue(isLikedAtom);
  // const names = useRecoilValue(namesAtom);
  // const [array, setArray] = useState<any>([]);
  // const onLiked = () => {
  //   if (isLiked) {
  //     setIsLiked(false);
  //     setArray([]);
  //     setNames(array);
  //   } else {
  //     setIsLiked(true);
  //     setArray(array.concat(name));
  //     setNames(array);
  //   }
  // };
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.holotools.app/v1/channels/youtube/${yt_channel_id}`
      );
      const json = await response.json();
      setName(json.name);
      setDescription(json.description);
      setPhoto(json.photo);
      setPublished_at(json.published_at);
      setTwitter_link(json.twitter_link);
      setView_count(json.view_count);
      setSubscriber_count(json.subscriber_count);
      setVideo_count(json.video_count);
    })();
  }, [yt_channel_id]);
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main}>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src={`${photo}`} alt="proImg" />
              </div>
              <div className="details">
                <h1 className="name">{name}</h1>
                {/* <Heart onClick={onLiked}>♥︎</Heart> */}
                <br />
                <h1>
                  <span>View Count:</span> {view_count}
                </h1>
                <h1>
                  <span>Subscriber Count:</span> {subscriber_count}
                </h1>
                <h1>
                  <span>Video Count:</span> {video_count}
                </h1>
                <h1>
                  <span>Debut:</span> {published_at}
                </h1>
                <br />
                <a
                  className="link"
                  href={`https://twitter.com/${twitter_link}`}
                >
                  Twitter: {twitter_link}
                </a>
              </div>
            </div>
            <Description>{description}</Description>
          </div>
        </Main>
      </div>
    </>
  );
}
export default Channel;
