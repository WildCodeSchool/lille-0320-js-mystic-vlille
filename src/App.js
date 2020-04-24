import React from "react";
import Mappy from "./components/Mappy";
import NavBar from "./components/styles/NavBar.js";
import BottomAppBar from "./components/styles/BottomAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import List from "./components/List";
import SwitchButton from "./components/styles/SwitchButton";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <CssBaseline />
          <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Mappy} />
              <Route path="/list" component={List} />
            </Switch>
          </div>
          <BottomAppBar />
        </Router>
      </>
    );
  }
}
