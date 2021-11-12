import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnSubmit = e => {
        fetch(`https://safe-scrubland-04558.herokuapp.com/makeadmin?email=${email}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => window.alert('Admin added succesfully!'))
        e.preventDefault();
    }
    return (
        <Container>
            <Box style={{margin:'100px',backgroundColor: 'goldenrod', padding: '20px', borderRadius: '10px'}}>
                <Typography variant="h4">Make Admin</Typography>
            <form onSubmit={handleOnSubmit}>
                <TextField onBlur={e => setEmail(e.target.value)} label="Email" variant="standard" style={{width:"100%"}} />
                <br />
                <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            </Box>
        </Container>
    );
};

export default MakeAdmin;