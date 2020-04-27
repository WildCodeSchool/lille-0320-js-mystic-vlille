import React from "react";
import Mappy from "./components/Mappy";
import NavBar from "./components/styles/NavBar.js";
import BottomAppBar from "./components/styles/BottomAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SwitchButton from "@material-ui/core/Switch";
import List from "./components/List";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  handleChange = (event) => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <Router>
        <CssBaseline />
        <NavBar />
        {this.state.active ? (
          <Link to="/list">
            <SwitchButton
              checked={this.state.active}
              onClick={this.handleChange}
            />
          </Link>
        ) : (
          <Link to="/">
            <SwitchButton
              checked={this.state.active}
              onClick={this.handleChange}
            />
          </Link>
        )}
        <div className="App">
          <Switch>
            <Route exact path="/" component={Mappy} />
            <Route path="/list" component={List} />
          </Switch>
        </div>
        <BottomAppBar />
      </Router>
    );
  }
}
