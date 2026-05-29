import { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes ,getNotes} = context;
  useEffect(()=>{
    getNotes()
  },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((n) => {
        return <NoteItem key={n._id} note={n}/>
      })}
    </div>
  );
}
