import noteContext from "./NoteContext";
// import { useState } from "react";
const NoteState = (props) => {


  const s1 = {
    name: "Yash",
    class: "A",
  };


  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "gracy",
  //       class: "b",
  //     });
  //   }, 1000);
  // };


  return (
    <noteContext.Provider value={s1}>{props.children}</noteContext.Provider>
  );


};

export default NoteState;
