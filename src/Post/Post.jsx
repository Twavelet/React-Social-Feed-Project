// probably gets the CreatePost instantiated in this
import React from 'react';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';




const PostFeed = (props) => {

    
    return (
        // props.parentPost.map((post)=>{
        //     return(
        //         <body>
                 <div>
                    {props.post.name}
                    {props.post.body}
                    <LikeDislikeButton/>
                 </div>
            // </body>
        //     )
        // })
    )
}


//create like/dislike component 

//inside will be two buttons

//two functions - like and dislike


export default PostFeed