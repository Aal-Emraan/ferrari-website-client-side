import { Box } from '@mui/system';
import React from 'react';

const PhotoGallery = () => {
    return (
        <Box style={{background:"url('https://i.ibb.co/GsHtYF8/laferrari.jpg')", height:'50vh',backgroundSize: 'contain'}}>
            {/* <img src="https://i.ibb.co/GsHtYF8/laferrari.jpg" alt="" style={{widht: '100'}}/> */}
        </Box>
    );
};

export default PhotoGallery;