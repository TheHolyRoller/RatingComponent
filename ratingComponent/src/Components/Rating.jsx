import React from 'react'

function Rating() {

// Create the Rating Array here 

const RatingArray = [

{text: "my Text", rating: 3}, 
{text: "good review", rating: 4}, 
{text: "excellent review", rating: 5}


]




  return (
    <div>
        

     {RatingArray.map((review, index) => {
     
     console.log("why is this not showing up"), 
     console.log(review.rating), 
     console.log(review.text),
    <div id="rating" >
    {review.text}
    {review.rating}

    </div>


        
        
     })}
     
    IS This working 
      
    </div>
  )
}

export default Rating
