import moment from "moment";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchTypedAtom } from "../atoms";
import { fetchUpcoming } from "../routes/api";

const Upcomings = styled.div`
  float: left;
  background: 000;
`;
const Length = styled.div`
  background: ${(props) => props.theme.lengthbarColor};
  color: ${(props) => props.theme.textColor};
  padding: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
  .searchLength {
    position: absolute;
  }
  span {
    color: red;
  }
`;
const Box = styled.div`
  height: 250px;
  width: 315px;
  float: left;
  display: flex;
  color: white;
  background-color: #151516;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.01);
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
      color: #a2d8e6;
    }
  }
`;
const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 15px;
  border-radius: 30px;
`;
const Details = styled.div`
  font-size: 15px;
  .title {
    font-size: 13px;
  }
  .channelName {
    color: #49c8f0;
    &:hover {
      color: #0585ac;
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

export function Upcoming() {
  const { data } = useQuery<IHoloLive[]>("allUpcoming", fetchUpcoming);
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
          <Box key={item.id}>
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
                    <br />
                    <Link to={`/video/${item.yt_video_key}`}>
                      <span>{item.status}</span>{" "}
                      {moment(`${item.live_schedule}`).fromNow()}
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
    <Upcomings>
      {search === "" ? (
        <>
          <Length>
            <span>Upcoming: </span>
            {data?.length}
          </Length>
          {data?.map((item) => (
            <Box key={item.id}>
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
                      <br />
                      <Link to={`/video/${item.yt_video_key}`}>
                        <span>{item.status}</span>{" "}
                        {moment(`${item.live_schedule}`).fromNow()}
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
    </Upcomings>
  );
}
