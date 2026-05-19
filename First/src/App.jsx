// import About from "./componets/About";
import Alret from "./componets/Alret";
import Contact from "./componets/Contact";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [darkmode, setDarkmode] = useState("light");
  const [text, settext] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleSwitch = () => {
    if (darkmode === "light") {
      setDarkmode("dark");
      settext("Enable Light Mode");
      document.body.style.backgroundColor = "#435c74";
      document.body.style.color = "white";
      showAlert("Dark Mode is on", "success");
    } else {
      setDarkmode("light");
      settext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode off", "danger");
    }
  };
  return (
    <Router>
      {" "}
      <div>
        <Navbar title={"Textutils"} mode={darkmode} />
        <Alret alert={alert} />
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={toggleSwitch}
          ></input>
          <label className="form-check-label" htmlFor="switchCheckDefault">
            {text}
          </label>
        </div>
      </div>
      
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/text" element={<Textform showAlert={showAlert} />} />
      </Routes>
    </Router>
  );
}

export default App;
