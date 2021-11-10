import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Car from '../../AllCars/Car/Car';

const FeaturedCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('/cars.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <Container sx={{my: 5}}>
            
            <Typography variant="h3" sx={{mb:3}}>
                Our Featured Cars
            </Typography>

            <Grid container spacing={3}>
                {
                    cars.map(car => <Car car={car}></Car>)
                }
            </Grid>
        </Container>
    );
};

export default FeaturedCars;