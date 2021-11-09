import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#AD0C0C'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Ferrari
          </Typography>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/allcars" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">All Cars</Button>
          </NavLink>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink
            to="/signup"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Sign Up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
