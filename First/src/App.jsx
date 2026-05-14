import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
function App() {
  return (
    <div>
      <Navbar title={"Textutils"} />
      <div className="container">
        <Textform />
      </div>
    </div>
  );
}

export default App;
