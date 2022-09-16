// probably gets the CreatePost instantiated in this
import React from 'react';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';
import '../App.css'




const PostFeed = (props) => {

    
    return (
        
                 <div className='postFeed'>
                    <h3>
                        {props.post.name}
                    </h3>
                    <body>{props.post.body}</body>
                    <LikeDislikeButton/>
                 </div>
    )
}


//create like/dislike component 

//inside will be two buttons

//two functions - like and dislike


export default PostFeed