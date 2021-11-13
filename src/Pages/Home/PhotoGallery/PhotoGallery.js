import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PhotoGallery = () => {
    return (
        <Box style={{background:"url('https://i.ibb.co/GsHtYF8/laferrari.jpg')", height:'70vh',backgroundSize: 'contain'}}>
            <Container style={{display: 'flex',justifyContent: 'center', paddingTop: '110px'}}>
                <Box style={{ color: 'white'}}>
                    <Typography variant="h3" sx={{mb:4}}>Subscribe to our newsletter</Typography>
                    <TextField label="Email" variant="filled" style={{backgroundColor: 'white', borderRadius: '1in', width: '70%'}}/>
                    <Button variant="contained" style={{backgroundColor: '#AD0C0C', borderRadius: '1in',padding: '15px 20px'}}>Subscribe</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default PhotoGallery;