import { useContext } from "react"
import noteContext from "../context/notes/NoteContext"


export default function Profile() {

  const a = useContext(noteContext)

  // useEffect(()=>{
  //   a.update();
  // })

  return (
    <div>Profile  {a.name}</div>
  )
}
