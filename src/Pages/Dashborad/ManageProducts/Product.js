import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Rating, Typography } from "@mui/material";

const Product = ({car}) => {

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure?')
        if(confirmation){
            fetch(`http://localhost:5000/deletecar/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => window.alert("product deleted"))
        }
        
    }
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
            <Button onClick={() => handleDelete(car._id)} variant="contained">Delete Car</Button>
        </CardActions>
      </Card>
    </Grid>
    );
};

export default Product;     