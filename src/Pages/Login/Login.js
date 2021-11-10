import { Button, Container, Paper, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const {login, signInWithGoogle} = useAuth();
  const [loginInfo, setLoginInfo] = useState({});

  const history = useHistory();
  const location = useLocation();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginInfo = {...loginInfo};
    newLoginInfo[field] = value;
    setLoginInfo(newLoginInfo);
  }

  const handleLoginSubmit = (e) => {
    login(loginInfo.email, loginInfo.password);
    e.preventDefault();
  };

  return (
    <Container style={{textAlign: 'center'}}>
      <Paper variant="outlined" sx={{my:5, py:5}}>
          <Typography variant="h4">Login</Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            onBlur={handleOnBlur}
            variant="standard"
            sx={{ width: "75%", mb:5 }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            variant="standard"
            sx={{ width: "75%", mb:5 }}
          />
          <Button type="submit" variant="contained" sx={{ width: "75%", mb:5 }}>
            Login
          </Button>
        </form>
        <Link to="/signup" sx={{}}>New User? Sign Up</Link>
        <Typography variant="h6" sx={{my:5}}>----------- OR -------------</Typography>
        <Box>
            <Button variant="outlined" onClick={() =>signInWithGoogle(history, location)}>Google Sign in</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
