import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Notes from "./components/Notes";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import AddNote from "./components/AddNotes";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
      {/* <Alert type = "success" message ="Note added"/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/addNote" element={<AddNote />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
