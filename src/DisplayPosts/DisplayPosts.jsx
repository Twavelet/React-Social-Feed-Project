import React from 'react';
import PostFeed from '../Post/Post';

const DisplayPosts = (props) => {
    return (
            props.parentPost.map((post)=>{
                return (<PostFeed post ={post}/>)
            })
    )
}
 
export default DisplayPosts;
