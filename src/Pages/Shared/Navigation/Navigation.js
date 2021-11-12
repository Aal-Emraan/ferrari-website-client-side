import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Drawer } from "@mui/material";

const Navigation = () => {
    const { user, logout } = useAuth();
    const [state, setState] = React.useState(false);

    const list = (
        <Box style={{background: '#AD0C0C', display: 'flex', flexDirection: 'column', padding: '10px', height:'100vh'}}>
            <NavLink
                to="/"
                style={{
                    textDecoration: "none",
                    color: "white",
                }}
            >
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
                to="/allcars"
                style={{
                    textDecoration: "none",
                    color: "white",
                }}
            >
                <Button color="inherit">Explore All Cars</Button>
            </NavLink>
            {user.email ? (
                <>
                    <NavLink
                        to="/dashboard"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Button color="inherit">Dashboard</Button>
                    </NavLink>
                    <Typography variant="h6" sx={{ mx: 1 }}>
                        {user?.displayName}
                    </Typography>
                    <Button variant="contained" onClick={logout}>
                        Log Out
                    </Button>
                </>
            ) : (
                <>
                    <NavLink
                        to="/login"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Button color="inherit">Login</Button>
                    </NavLink>
                    <NavLink
                        to="/signup"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Button color="inherit">Sign Up</Button>
                    </NavLink>
                </>
            )}
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#AD0C0C" }}>
                <Toolbar>
                    {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display:{md: 'none'} }}
          >
            <MenuIcon />
          </IconButton> */}
                    <>
                        <img
                            src="https://i.ibb.co/WpJP9F7/logo.png"
                            alt=""
                            style={{ width: "50px" }}
                        />
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Ferrari
                        </Typography>
                    </>
                    <Box sx={{ display: { sm: "none", md: "block" } }}>
                        <Box sx={{ display: "flex" }}>
                            <NavLink
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink
                                to="/allcars"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                <Button color="inherit">
                                    Explore All Cars
                                </Button>
                            </NavLink>
                            {user.email ? (
                                <>
                                    <NavLink
                                        to="/dashboard"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <Button color="inherit">
                                            Dashboard
                                        </Button>
                                    </NavLink>
                                    <Typography variant="h6" sx={{ mx: 1 }}>
                                        {user?.displayName}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        onClick={logout}
                                    >
                                        Log Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <NavLink
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                                    <NavLink
                                        to="/signup"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <Button color="inherit">Sign Up</Button>
                                    </NavLink>
                                </>
                            )}
                        </Box>
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setState(true)}
                        sx={{ mr: 2, display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
