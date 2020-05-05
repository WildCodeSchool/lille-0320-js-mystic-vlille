import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import SwitchButton from "@material-ui/core/Switch";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TransitionsModal from "./Modal";
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
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              V'Lille App
            </Typography>
            <TransitionsModal title="Aide" />
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar;
