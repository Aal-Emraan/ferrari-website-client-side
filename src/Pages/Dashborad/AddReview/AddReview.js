import { Button,  Paper, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
    const { user } = useAuth();

    const [ratingValue, setValue] = useState(5);
    const [review, setReview] = useState({name: user.displayName});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }

    const handleOnSubmit = e => {
        const reviewWithRating = {...review, rating: ratingValue}
        fetch('https://safe-scrubland-04558.herokuapp.com/review',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(reviewWithRating)
        })
        .then(res => res.json())
        .then(data => alert('Review added!'))
        e.preventDefault();
    }

    return (
        <Paper sx={{m:5,p:3}}>
            <Typography variant="h4" align="center" sx={{mb:4}}>Add Review</Typography>
            <form onSubmit={handleOnSubmit}>
                
                <TextField
                    name="name"
                    label="Your name"
                    defaultValue={user.displayName}
                    variant="standard"
                    onBlur={handleOnBlur}
                    sx={{width:1,mb:3}}
                />
                <TextField
                    name="review"
                    label="Write your review"
                    variant="standard"
                    onBlur={handleOnBlur}
                    sx={{width:1,mb:3}}
                    multiline
                />
                <Typography component="legend">Rating</Typography>
                <Rating
                    value={ratingValue}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{width:1,mb:3}}
                />
                <TextField
                    name="img"
                    label="Your image link"
                    variant="standard"
                    onBlur={handleOnBlur}
                    sx={{width:1,mb:5}}
                />
                <Button type="submit" variant="contained">Submit Review</Button>
            </form>
        </Paper>
    );
};

export default AddReview;
