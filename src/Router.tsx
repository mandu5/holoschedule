import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Stream from "./routes/Stream";
import Channel from "./routes/Channel";
import Favorites from "./routes/Favorites";
import Multiview from "./routes/Multiview";
import Setting from "./routes/Setting";
import About from "./routes/About";
import LoginPage from "./routes/Login";
import AccountSetting from "./routes/AccountSetting";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "./atoms";

function Routers({ userObj }:any) {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:yt_video" element={<Stream />} />
        <Route path="/channel/:yt_channel_id" element={<Channel />} />
        <Route path="/multiview" element={<Multiview />} />
        <Route path="/timeline" element={<Multiview />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About userObj={userObj} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
        {isLoggedIn ? (
          <>
            <Route path="/favorites" element={<Favorites />} />
          </>
        ) : (
          <>
            <Route path="/favorites" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
export default Routers;
