import React from 'react';

const DisplayPosts = (props) => {
    return (
        <div>
            {props.parentPost.map((post, index)=>{
                return (
                    <div key={index}>
                        <h3>{post.name}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })
            }
        </div>
    );
}
 
export default DisplayPosts;
