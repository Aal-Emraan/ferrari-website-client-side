import { Container, Grid, Rating, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useAuth from "../../../hooks/useAuth";

const CarDetails = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        fetch(`https://safe-scrubland-04558.herokuapp.com/singlecar/${id}`)
            .then((res) => res.json())
            .then((data) => setCar(data));
    }, [id]);

    const [orderInfo, setOrderInfo] = useState({name: user.displayName, email: user.email});

    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        newInfo["car"] = car.name;
        newInfo['cost'] = car.price;
        newInfo['status'] = 'Pending';
        setOrderInfo(newInfo);
    };

    const handleOnSubmit = (e) => {
        fetch('https://safe-scrubland-04558.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("order done!")
            }
        })
        e.preventDefault();
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
    };
    // console.log(car);
    return (
        <Container sx={{ my: 10 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: "100%" }} src={car.img} alt="car" />
                    <Typography variant="h5">{car.name}</Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography variant="h4">{car.name}</Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Typography variant="subtitle1">
                        {car.description}
                    </Typography>
                    <Typography variant="h6">Engine: {car.engine}</Typography>
                    <Typography variant="h6">Power: {car.power}</Typography>
                    <Typography variant="h6">
                        Top Speed: {car.topspeed}
                    </Typography>
                    <Typography variant="h6">
                        Zero to Hundred: {car.firstHundred}
                    </Typography>
                    <Typography variant="h4">Price: {car.price}$</Typography>
                    <Button variant="contained" onClick={handleOpen}>
                        Order Now
                    </Button>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Please give your details
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            name="name"
                            label="Name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            name="email"
                            label="Email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            name="address"
                            label="Address"
                            onBlur={handleOnBlur}
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            onBlur={handleOnBlur}
                            type="number "
                            variant="outlined"
                            sx={{ width: 1, mb: 2 }}
                        />
                        <Button type="submit">Confirm Order</Button>
                    </form>
                </Box>
            </Modal>
        </Container>
    );
};

export default CarDetails;
