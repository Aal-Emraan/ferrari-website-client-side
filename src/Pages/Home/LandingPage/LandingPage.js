import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LandingPage = () => {
    return (
        <div style={{background: 'url(https://images.hdqwalls.com/wallpapers/laferrari-cgi-h9.jpg)', height: '80vh',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Box style={{background: 'linear-gradient(to right,#AD0C0C, #0000, #0000)', height: '80vh', display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2" style={{color: 'white', paddingTop: '100px'}}>GET YOUR DREAM FERRARI</Typography>
            </Box>
            
        </div>
    );
};

export default LandingPage;