
import React, { useState } from 'react';
import CreatePostForm from './CreatePost/CreatePost';
import DisplayPosts from './DisplayPosts/DisplayPosts';

  

function App() {


  const [posts, setPosts] = useState([])
  //we pass in {posts} when instantiating the post, create posts, display posts
  
  function addNewPost(post){
    
    let tempPosts = [post, ...posts]

    setPosts(tempPosts);
  }

  return (
    <div className="App">
        <h3 style={{margin: '1em'}}>Social 
        <medium className='text-muted'>Feed</medium></h3>

     <CreatePostForm addNewPostProperty = {addNewPost}/>
     <DisplayPosts parentPost = {posts}/>
    </div>
  );
}

export default App;
