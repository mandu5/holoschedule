import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchTypedAtom } from "../atoms";
import { fetchLive } from "../routes/api";

const Length = styled.div`
  background: ${(props) => props.theme.lengthbarColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  margin-bottom: 20px;
  font-weight: 400;
  span {
    color: red;
  }
`;
const LengthTwo = styled.div`
  background: ${(props) => props.theme.lengthbarColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  margin-bottom: 20px;
  font-weight: 400;
  position: absolute;
  span {
    color: red;
  }
`;
const Box = styled.div`
  margin-top: 20px;
  height: 250px;
  width: 315px;
  float: left;
  display: flex;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 5px;
  img {
    max-height: 250px;
    max-width: 315px;
  }
  a {
    float: left;
    align-items: center;
  }
  &:hover {
    a {
      color: #49c8f0;
    }
  }
`;
const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 30px;
`;
const Details = styled.div`
  font-size: 15px;
  .title {
    margin-top: 20px;
    width: 250px; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
    overflow: hidden;
    display: block; 
  }
  .channelName {
    color: #a665b7;
    &:hover {
      color: #555;
    }
  }
  span {
    color: red;
  }
`;

interface IHoloLive {
  id: number;
  yt_video_key: string;
  bb_video_id: string;
  title: string;
  thumbnail: string;
  live_schedule: string;
  live_start: string;
  live_end: string;
  live_viewers: string;
  status: string;
  channel: {
    id: number;
    yt_channel_id: string;
    bb_space_id: string;
    name: string;
    description: string;
    photo: string;
    published_at: string;
    twitter_link: string;
  };
}
export function Live() {
  const { data } = useQuery<IHoloLive[]>("allLive", fetchLive);
  const search = useRecoilValue(searchTypedAtom);
  const names = data
    // eslint-disable-next-line array-callback-return
    ?.filter((item) => {
      if (search === "") return item;
      else if (item.channel.name.toLowerCase().includes(search)) {
        return item;
      }
    })
    .map((item) => {
      return (
        <>
          <LengthTwo>
            <span>Live: </span> {data?.length}
          </LengthTwo>
          <Box key={item.yt_video_key}>
            <div>
              <Link to={`/video/${item.yt_video_key}`} className="thumbnail">
                <img
                  src={`http://img.youtube.com/vi/${item.yt_video_key}/maxresdefault.jpg`}
                  alt="thumbnail"
                />
              </Link>
              <div>
                <Link to={`/channel/${item.channel.yt_channel_id}`}>
                  <Profile src={`${item.channel.photo}`} />
                </Link>
                <Details>
                  <div className="title">{item.title}</div>
                  <Link to={`/channel/${item.channel.yt_channel_id}`}>
                    <div className="channelName">{item.channel.name}</div>
                  </Link>
                  <div>
                    <Link to={`/video/${item.yt_video_key}`}>
                      <span>Live Now</span> {item.live_viewers} Watching
                    </Link>
                  </div>
                </Details>
              </div>
            </div>
          </Box>
        </>
      );
    });
  return (
    <>
      {search === "" ? (
        <>
          <Length>
            <span>Live: </span> {data?.length}
          </Length>
          {data?.map((item) => (
            <Box key={item.yt_video_key}>
              <div>
                <Link to={`/video/${item.yt_video_key}`} className="thumbnail">
                  <img
                    src={`http://img.youtube.com/vi/${item.yt_video_key}/maxresdefault.jpg`}
                    alt="thumbnail"
                  />
                </Link>
                <div>
                  <Link to={`/channel/${item.channel.yt_channel_id}`}>
                    <Profile src={`${item.channel.photo}`} />
                  </Link>
                  <Details>
                    <div className="title">{item.title}</div>
                    <Link to={`/channel/${item.channel.yt_channel_id}`}>
                      <div className="channelName">{item.channel.name}</div>
                    </Link>
                    <div>
                      <Link to={`/video/${item.yt_video_key}`}>
                        <span>Live Now</span> {item.live_viewers} Watching
                      </Link>
                    </div>
                  </Details>
                </div>
              </div>
            </Box>
          ))}
        </>
      ) : (
        <>{names}</>
      )}
    </>
  );
}
