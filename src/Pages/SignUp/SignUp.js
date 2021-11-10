import {Button,Container,TextField,Typography,Box,Paper, Alert,} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const {user,emailAndPasswordSignIn, signInWithGoogle} = useAuth();
  const [signInInfo, setSignInInfo] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);


  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignInInfo = {...signInInfo};
    newSignInInfo[field] = value;
    setSignInInfo(newSignInInfo);
  }
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if(signInInfo.password !== signInInfo.password2){
      setPasswordMatch(false);
      return
    }
    emailAndPasswordSignIn(signInInfo.email, signInInfo.password, signInInfo.displayName);
    console.log(user);
  };

  return (
    <Container style={{textAlign: 'center'}}>
      <Paper variant="outlined" sx={{my:5, py:5}}>
          <Typography variant="h4">Sign Up</Typography>
        <form onSubmit={handleSignUpSubmit}>
          <TextField
            label="Name"
            name="displayName"
            variant="standard"
            onBlur={handleOnBlur}
            sx={{ width: "75%", mb: 5 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="standard"
            onBlur={handleOnBlur}
            sx={{ width: "75%", mb: 5 }}
          />
          <TextField
          label="Password"
          name="password"
          type="password"
          variant="standard" 
          onBlur={handleOnBlur}
          sx={{ width: "75%", mb:5 }}
          />
          <TextField
            label="Re-enter password"
            name="password2"
            type="password"
            variant="standard"
            onBlur={handleOnBlur}
            sx={{ width: "75%" }}
          />
          {passwordMatch || <Alert severity="error" sx={{mt:1, width: "73%", mx: 'auto' }}>Password didn't match!</Alert>}
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "75%", my: 5 }}
          >
            Sign Up
          </Button>
        </form>
        <Link to="/login">Already have Account? Login</Link>
        <Typography variant="h6" sx={{ my: 5 }}>
          ----------- OR -------------
        </Typography>
        <Box>
          <Button variant="outlined" onClick={signInWithGoogle}>Google Sign in</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
