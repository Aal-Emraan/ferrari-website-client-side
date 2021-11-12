import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
    const [newCar, setNewCar] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...newCar};
        newInfo[field] = value;
        setNewCar(newInfo);
    }

    const handleOnSubmit = e => {
        fetch('https://safe-scrubland-04558.herokuapp.com/addcar', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(result =>{
            alert('New car added succesfully!')
        })
        e.preventDefault();
    }

    console.log(newCar);
    return (
        <Paper sx={{m:5,p:5}}>
            <Typography variant="h4">Add New Car</Typography>
            <form onSubmit={handleOnSubmit}>
                <TextField
                id="standard-basic"
                name="name"
                label="Car name"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="price"
                label="Price"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="engine"
                label="Engine"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="power"
                label="Power"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="firstHundred"
                type="number"
                label="First Hundred time in second"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="topspeed"
                type="number"
                label="Top Speed"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="img"
                label="Image URL"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <TextField
                id="standard-basic"
                name="description"
                label="Description"
                variant="standard"
                onBlur={handleOnBlur}
                style={{width:'100%', marginBottom: '15px'}}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">Add New Car</Button>
            </form>
        </Paper>
    );
};

export default AddProduct;

// {"name": "Ferrari LaFerrari", "price":"890,000", "engine":"6.5L V12","power":"789 hp @ 8500 rpm","firstHundred":"3.8", "img":"https://i.ibb.co/GsHtYF8/laferrari.jpg","description":"It boasts the most extreme performance ever achieved by a Ferrari production car and features the most advanced and innovative technical solutions which will, in the future, filter down to the rest of the Ferrari range. The LaFerrari is Ferrari’s first ever production car to be equipped with the F1-derived hybrid solution – the HY-KERS system – which combines an electric motor producing over 150 CV with the most powerful incarnation yet of Ferrari’s classic V12, with 800 CV at 9000 rpm.", "topspeed":"350"}