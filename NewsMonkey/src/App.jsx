import { Component } from "react";
import Navbar from "./componets/Navbar";
import News from "./componets/News";
// import { Route, Router, Routes } from 'react-router-dom'

// method make here
// propse state use method diffrent
// 5da591db591a4c2488c42a12b2bef658
export default class App extends Component {
  render() {
    let api = "5da591db591a4c2488c42a12b2bef658";
    let cn = "us";
    let category = "science";
    return (
      <div>
        <Navbar />
        <News pageSize={10} apiKey={api} country={cn} cat={category} />
      </div>
    );
  }
}
