import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import MapIcon from "@material-ui/icons/Map";
import SwitchButton from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./UseStyles";

const NavBar = () => {
  const [active, setActive] = useState(true);
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              V'Lille App
            </Typography>
            <FormatListBulletedIcon />
            {active ? (
              <Link to="/list">
                <SwitchButton
                  checked={active}
                  onClick={() => setActive(!active)}
                />
              </Link>
            ) : (
              <Link to="/">
                <SwitchButton
                  checked={active}
                  onClick={() => setActive(!active)}
                />
              </Link>
            )}
            <MapIcon />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar;
