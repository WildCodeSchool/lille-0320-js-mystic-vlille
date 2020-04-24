import React from "react";
import Switch from "@material-ui/core/Switch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch>
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA" inputProps={{ "aria-label": "secondary checkbox" }}
      </Switch>
    </div>
  );
}
