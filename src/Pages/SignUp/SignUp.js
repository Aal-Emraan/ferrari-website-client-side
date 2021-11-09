import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Paper variant="outlined" sx={{my:5, py:5}}>
          <Typography variant="h4">Sign Up</Typography>
        <form onSubmit={handleSignUpSubmit}>
          <TextField
            label="Name"
            variant="standard"
            sx={{ width: "75%", mb: 5 }}
          />
          <TextField
            label="Email"
            type="email"
            variant="standard"
            sx={{ width: "75%", mb: 5 }}
          />
          <TextField label="Password" type="password" variant="standard"  sx={{ width: "75%", mb:5 }}/>
          <TextField
            label="Re-enter password"
            type="password"
            variant="standard"
            sx={{ width: "75%", mb: 5 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "75%", mb: 5 }}
          >
            Sign Up
          </Button>
        </form>
        <Link to="/login">Already have Account? Login</Link>
        <Typography variant="h6" sx={{ my: 5 }}>
          ----------- OR -------------
        </Typography>
        <Box>
          <Button variant="outlined">Google Sign in</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
