// probably gets the CreatePost instantiated in this
import React from 'react';

const PostFeed = (props) => {
    return (
        // props.parentPost.map((post)=>{
        //     return(
        //         <body>
                 <div>
                    {props.post.name}
                    {props.post.body}
                 </div>
            // </body>
        //     )
        // })
    )
}





export default PostFeed