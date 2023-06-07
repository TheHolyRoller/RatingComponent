import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating  from '@mui/material/Rating';

// import { Box, Typography, Rating as MuiRating } from '@material-ui/core';
// import { Star } from '@material-ui/icons';
import StarIcon from '@mui/icons-material/Star';
import { updateRating, updateText, } from '../actions/actions.js';






const MyRating = () => {
  // Get the rating and text props from the Redux store
  const rating = useSelector((state) => state.rating);
  const text = useSelector((state) => state.text);
  // Get the reviews prop from the Redux store
//   const reviews = useSelector((state) => state.reviews);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Handle the change of rating input
  const handleRatingChange = (event, newValue) => {
    // Check if the input is a valid number between 1 and 5
    if (typeof newValue === 'number' && newValue >= 1 && newValue <= 5) {
      // Dispatch the action to update the rating in the store
      dispatch(updateRating(newValue));
    } else {
      // Show an error message
      alert('Please enter a valid rating between 1 and 5.');
    }
  };

  // Handle the change of text input
  const handleTextChange = (event) => {
    // Get the value of the input
    const value = event.target.value;
    // Dispatch the action to update the text in the store
    dispatch(updateText(value));
  };

  // Handle the click of submit button
  const handleSubmit = () => {
    // Check if the rating and text are not empty
    if (rating && text) {
      // Dispatch the action to add a new review to the store
      dispatch(addReview({ rating, text }));
      // Clear the rating and text inputs
      dispatch(updateRating(0));
      dispatch(updateText(''));
    } else {
      // Show an error message
      alert('Please enter a rating and a text.');
    }
  };
  
  const reviews = [ 

    {text: "my text", rating: 5}, 
    {text: "good text", rating: 3}, 
    {text: "good review", rating: 5}
    
    
    
  ]


  return (
    <Box>
      <Typography variant="h6">Rating Component</Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Rating:</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          icon={<StarIcon fontSize="large" />}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Text:</Typography>
        <input type="text" value={text} onChange={handleTextChange} />
      </Box>
      <button onClick={handleSubmit}>Submit</button>
      <Box>
        <Typography variant="h6">Reviews</Typography>
        {reviews.map((review, index) => (
          <Box key={index} display="flex" alignItems="center">
            <Rating
              name={`review-${index}`}
              value={review.rating}
              readOnly
              icon={<StarIcon fontSize="large" />}
            />
            <Typography variant="body1">{review.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
    
    );
};

    

export default MyRating;
