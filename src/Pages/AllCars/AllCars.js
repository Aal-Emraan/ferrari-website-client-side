import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Car from './Car/Car';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('/cars.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <Container sx={{my: 5}}>
            
            <Typography variant="h3" sx={{mb:3}}>
                All Cars
            </Typography>

            <Grid container spacing={3}>
                {
                    cars.map(car => <Car car={car}></Car>)
                }
            </Grid>
        </Container>
    );
};

export default AllCars;