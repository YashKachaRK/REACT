import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Notes from "./components/Notes";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
