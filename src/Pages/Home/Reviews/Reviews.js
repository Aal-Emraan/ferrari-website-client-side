import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {

  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetch('https://safe-scrubland-04558.herokuapp.com/allreviews')
    .then(res => res.json())
    .then(data => setAllReviews(data))
  },[])
  
  return (
    <Container sx={{ my: 5 }}>
        <Typography variant="h3" sx={{mb:3}}>
            Top Reviews
        </Typography>
      <Grid container spacing={5}>
        {
            allReviews.map(item => <Review review={item} key={item._id}></Review>)
        }
      </Grid>
    </Container>
  );
};

export default Reviews;
