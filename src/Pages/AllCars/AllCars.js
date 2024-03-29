import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Car from './Car/Car';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://safe-scrubland-04558.herokuapp.com/getcars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[])
    return (
        <>
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
            <Footer></Footer>
        </>
    );
};

export default AllCars;