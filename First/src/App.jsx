import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState("light");
  const [text, settext] = useState("Enable Dark Mode")
  const toggleSwitch = () =>{
    if (darkmode == "light"){
      setDarkmode("dark")
      settext("Enable Light Mode")
    }else{
      setDarkmode("light")
      settext("Enable Dark Mode")
    }
  }
  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onClick={toggleSwitch}
        ></input>
        <label className="form-check-label" for="switchCheckDefault">
         {text}
        </label>
      </div>
      <Navbar title={"Textutils"} mode={darkmode} />
      <div className="container">
        <Textform />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
