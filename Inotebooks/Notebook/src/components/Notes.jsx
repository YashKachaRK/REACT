import { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
export default function Notes() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  });

  return <div>Notes {a.state.name}</div>;
}
