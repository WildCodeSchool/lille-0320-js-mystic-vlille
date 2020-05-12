import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ScrollDialog from "./DialogBox";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  modalButton: {
    cursor: "pointer",
  },
  modalLegend: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0",
  },
  modalImg: {
    width: "20px",
    height: "28.33px",
    margin: "15px",
  },
  modalText: {
    padding: "0",
    marginTop: "0",
    marginLeft: "30px",
    fontSize: "0.9rem",
  },

  modalTitle: {
    fontSize: "1rem",
  },
}));
export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>

          <ScrollDialog />

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
}
