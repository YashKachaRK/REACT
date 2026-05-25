import { Component } from "react";
import Navbar from "./componets/Navbar";
import News from "./componets/News";
import { Route, Routes } from "react-router-dom";

// method make here
// propse state use method diffrent
// 5da591db591a4c2488c42a12b2bef658
export default class App extends Component {
  render() {
    let api = "5da591db591a4c2488c42a12b2bef658";

    return (
      <>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News key="general" pageSize={10} apiKey={api} country="us" cat="general" />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News key="business" pageSize={10} apiKey={api} country="us" cat="business" />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News key="sports"pageSize={10} apiKey={api} country="us" cat="sports" />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={10} apiKey={api} country="us" cat="technology" />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={10} apiKey={api} country="us" cat="health" />
            }
          />

           <Route
            exact
            path="/science"
            element={
              <News key="science" pageSize={10} apiKey={api} country="us" cat="science" />
            }
          />

           <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" pageSize={10} apiKey={api} country="us" cat="entertainment" />
            }
          />
        </Routes>
      </>
    );
  }
}
