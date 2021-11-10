import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleOnSubmit = e => {
        fetch(`http://localhost:5000/makeadmin?email=${email}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        e.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleOnSubmit}>
                <TextField onBlur={e => setEmail(e.target.value)} label="Email" variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;