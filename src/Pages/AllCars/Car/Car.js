import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={car.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {car.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {car.description.slice(0,130)}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
          <Link to={`/cardetails/${car._id}`} style={{textDecoration: 'none'}}><Button variant="contained" size="small">See Details</Button></Link>
          <Rating name="read-only" value={4} readOnly />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Car;
