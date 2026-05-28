import noteContext from "./NoteContext";

const NoteState = (props)=>{
  return(

    <NoteState.provider>
      {props.children}
    </NoteState.provider>
  )
}

export default NoteState;
 