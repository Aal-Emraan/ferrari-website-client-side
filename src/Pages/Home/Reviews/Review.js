import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {

    return (
        <Grid item sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"

                image={review.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.review}
                </Typography>
                <Rating name="read-only" value={review.rating} readOnly />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    );
};

export default Review;