import { useContext, useEffect } from "react"
import noteContext from "../context/notes/NoteContext"


export default function Profile() {

  const a = useContext(noteContext)

  useEffect(()=>{
    a.update();
  })

  return (
    <div>Profile {a.state.name} {a.state.class}</div>
  )
}
