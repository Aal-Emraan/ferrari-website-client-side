import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <Container sx={{ my: 5 }}>
        <Typography variant="h3" sx={{mb:3}}>
            Top Reviews
        </Typography>
      <Grid container spacing={5}>
        {
            Array.apply(null, Array(3)).map(item => <Review></Review>)
        }
      </Grid>
    </Container>
  );
};

export default Reviews;
