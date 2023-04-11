import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
        </IconButton>
        <Typography variant="h4">live score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
