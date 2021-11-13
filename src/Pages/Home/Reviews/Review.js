import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({review}) => {

    return (
        <Grid item sm={12} md={4} style={{textAlign: 'center'}}>
          <Card>
            <CardActionArea>
              <CardMedia
              style={{width: '170px', height: '170px',borderRadius: "1in", margin: '20px auto'}}
                component="img"

                image={review.img ? review.img : 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}
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