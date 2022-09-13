import React from 'react';

const DisplayPosts = (props) => {
    return (
        <div>
            {props.parentPost.map((post, index)=>{
                return (
                    <div key={index}>
                        <h1>{post.name}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })
            }
        </div>
    );
}
 
export default DisplayPosts;
