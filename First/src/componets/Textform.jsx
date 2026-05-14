import  { useState } from "react";

export default function Textform() {
  const [text, setText] = useState("");


  const handleUpClick = () => {
    console.log("Upper Case");
    setText(text.toUpperCase());
  };

  const handleLowwerClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleCount = () =>{
    setText(text.length)
  }

  const handleOnchage = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };


  return (
    <div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">
          Enter Text and select button{" "}
        </label>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="3"
          onChange={handleOnchage}
        ></textarea>
      </div>

      <button className="btn btn-primary mt-3" onClick={handleUpClick}>
        Convert to Upprcase
      </button>
      <button className="btn btn-primary mt-3 ms-3" onClick={handleLowwerClick}>
        Convert to LowerCase
      </button>
       <button className="btn btn-primary mt-3 ms-3" onClick={handleCount}>
        Count Length
      </button>


      <div className="container">
        <h2>You Text</h2>
        <p>{text.split(" ").length} Words    , {text.length} character</p>
        <p>Time: {text.split(" ").length*0.008}</p>
      </div>
    </div>
  );
}
