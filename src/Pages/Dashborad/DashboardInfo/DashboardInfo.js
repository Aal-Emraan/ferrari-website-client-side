import { Box } from '@mui/system';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react';

const DashboardInfo = () => {
    // const [user, setUser] = useState(0);
    // const [order, setOrder] = useState(0);
    // const [car, setCar] = useState(0);
    return (
        <Box sx={{p:5}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Box style={{height: '150px', backgroundColor:'green', borderRadius: '20px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h4">Total Products: 10</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{height: '150px', backgroundColor:'red', borderRadius: '20px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h4">Total User: 12</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box style={{height: '150px', backgroundColor:'blue', borderRadius: '20px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h4">Total Order: 15</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{height: '370px', backgroundColor: 'goldenrod', marginTop: '20px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                <Typography variant="h2">THIS IS DASHBOARD</Typography>
            </Box>
        </Box>
    );
};

export default DashboardInfo;