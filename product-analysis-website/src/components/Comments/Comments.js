import React from 'react';

const Comments = ({comment}) => {
    
    const {name, email, comments, ratings} = comment
    
    return (
        <div  className='border-4 border-pink-600 rounded  ' >
            <div >
            <p>Name: {name} </p>
            <p>Email: {email} </p>
            <p className='font-bold'>Comments : {comments} </p>
            <p>Ratings: {ratings}</p>
            </div>
            
        </div>
    );
};

export default Comments;