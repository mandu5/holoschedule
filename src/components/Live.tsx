import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchTypedAtom } from "../atoms";
import { fetchLive } from "../routes/api";

const Length = styled.div`
  background: ${(props) => props.theme.lengthbarColor};
  color: ${(props) => props.theme.textColor};
  padding: 5px;
  font-weight: 400;
  span {
    color: red;
    margin-left: 15px;
  }
`;
const LengthTwo = styled.div`
  background: ${(props) => props.theme.lengthbarColor};
  color: ${(props) => props.theme.textColor};
  padding: 5px;
  margin-bottom: 20px;
  font-weight: 400;
  position: absolute;
  span {
    color: red;
  }
`;
const Box = styled.div`
  float: left;
  display: flex;
  height: 250px;
  width: 335px;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
  .thumbnail {
    max-height: 178px;
    width: 335px;
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
  .intro {
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
          <Box key={item.yt_video_key} className="box">
            <div>
              <Link to={`/video/${item.yt_video_key}`} className="thumbnail">
                <img
                  className="thumbnail"
                  src={`http://img.youtube.com/vi/${item.yt_video_key}/maxresdefault.jpg`}
                  alt="thumbnail"
                />
              </Link>
              <div>
                <Link to={`/channel/${item.channel.yt_channel_id}`}>
                  <Profile src={`${item.channel.photo}`} />
                </Link>
                <Details>
                  <Link to={`/video/${item.yt_video_key}`}>
                    <div className="intro">{item.title}</div>
                  </Link>
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
            <Box key={item.yt_video_key} className="box">
              <div>
                <Link to={`/video/${item.yt_video_key}`} className="thumbnail">
                  <img
                    className="thumbnail"
                    src={`http://img.youtube.com/vi/${item.yt_video_key}/maxresdefault.jpg`}
                    alt="thumbnail"
                  />
                </Link>
                <div>
                  <Link to={`/channel/${item.channel.yt_channel_id}`}>
                    <Profile src={`${item.channel.photo}`} />
                  </Link>
                  <Details>
                    <Link to={`/video/${item.yt_video_key}`}>
                      <div className="intro">{item.title}</div>
                    </Link>
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
