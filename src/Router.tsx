import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Stream from "./routes/Stream";
import Channel from "./routes/Channel";
import Favorites from "./routes/Favorites";
import Multiview from "./routes/Multiview";
import Setting from "./routes/Setting";
import About from "./routes/About";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:youtubeKey" element={<Stream />} />
        <Route path="/channel/:holoId" element={<Channel />} />
        <Route path="/multiview" element={<Multiview />} />
        <Route path="/favorites/:loginId" element={<Favorites />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default Routers;
