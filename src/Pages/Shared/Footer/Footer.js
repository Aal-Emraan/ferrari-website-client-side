import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{background: '#AD0C0C'}}>
            <Container style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0'}}>
            <Typography variant="h4" style={{color: 'white'}}>Ferrari</Typography>
            <Typography variant="h6" style={{color: 'white'}}>&copy; Copyright. All rights reserved.</Typography>
            </Container>
        </Box>
    );
};

export default Footer;