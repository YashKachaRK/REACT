import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Notes from "./Component/Notes";
import Favorites from "./Component/Favorites";
import Profile from "./Component/Profile";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;