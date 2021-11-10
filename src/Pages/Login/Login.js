import { Button, Container, Paper, TextField, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {login, signInWithGoogle} = useAuth();
  const handleLoginSubmit = (e) => {
    login();
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
            variant="standard"
            sx={{ width: "75%", mb:5 }}
          />
          <TextField
            label="Password"
            type="password"
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
            <Button variant="outlined" onClick={signInWithGoogle}>Google Sign in</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
