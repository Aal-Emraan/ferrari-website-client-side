import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getcars')
        .then(res => res.json())
        .then(data => setCars(data))
    },[cars])
    return (
        <Container sx={{my: 5}}>
            
            <Typography variant="h5" sx={{mb:3}}>
                All Products
            </Typography>

            <Grid container spacing={3}>
                {
                    cars.map(car => <Product car={car}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default ManageProducts;