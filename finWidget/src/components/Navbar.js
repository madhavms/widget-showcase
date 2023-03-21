import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
    fontSize: "1.25rem",
  },
  appBar: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10,
    backgroundColor: (props) =>
      props.mode === "light" ? "#3f51b5" : "#212121",
  },
  brightness4Icon: {
    color: "white",
  },
}));

export default function Navbar({
  mode,
  setMode,
}) {
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };


  const classes = useStyles({ mode });

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Showcase
          </Typography>
          <IconButton onClick={toggleMode}>
            {mode === "light" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon className={classes.brightness4Icon} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
