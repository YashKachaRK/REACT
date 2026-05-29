import { useState } from "react";
import noteContext from "./NoteContext";

// import { useState } from "react";
const NoteState = (props) => {
  const notesIntial = [
    {
      _id: "6a17c93320f7d37ae0451399",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes Good Working ",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:48:51.227Z",
      __v: 0,
    },
    {
      _id: "6a17c9b020f7d37ae045139a",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:56.261Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
    {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "My Notes",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesIntial);

  // add a notes
  const addNote = (title, description, tag) => {
    // API call
    note = {
      _id: "6a17c9b120f7d37ae045139b",
      user: "6a16decceb42c3b5ae8ba7d4",
      title: "Add",
      description: "My notes is good",
      tag: "Persnol",
      date: "2026-05-28T04:50:57.221Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  };
  // delete a notes
  const deleteNote = () => {};

  // edit notes
  const editNote = () => {};
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
// const [state, setState] = useState(s1);
// const update = () => {
//   setTimeout(() => {
//     setState({
//       name: "gracy",
//       class: "b",
//     });
//   }, 1000);
// };

// const s1 = {
//   name: "Yash",
//   class: "A",
// };
