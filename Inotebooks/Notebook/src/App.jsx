import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Notes from "./components/Notes";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import AddNote from "./components/AddNotes";
import Login from "./components/login";
// import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />

          <Route
            path="/Notes"
            element={
              <>
                <Navbar />
                <Notes />
              </>
            }
          />

          <Route
            path="/Favorites"
            element={
              <>
                <Navbar />
                <Favorites />
              </>
            }
          />

          <Route
            path="/Profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />

          <Route
            path="/addNote"
            element={
              <>
                <Navbar />
                <AddNote />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
