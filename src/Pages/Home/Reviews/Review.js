import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = () => {
    return (
        <Grid item sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"

                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Rating name="read-only" value={4} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    );
};

export default Review;