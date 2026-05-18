import About from "./componets/About";
import Alret from "./componets/Alret";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState("light");
  const [text, settext] = useState("Enable Dark Mode");
  const toggleSwitch = () => {
    if (darkmode == "light") {
      setDarkmode("dark");
      settext("Enable Light Mode");
      document.body.style.backgroundColor = "#435c74";
      document.body.style.color ="white"
    } else {
      setDarkmode("light");
      settext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
            document.body.style.color ="black"

    }


  };
  
  return (
    <div>
      <Navbar title={"Textutils"} mode={darkmode} />
      <Alret alert="This is alert" />
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
      <div className="container">
        <Textform />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
