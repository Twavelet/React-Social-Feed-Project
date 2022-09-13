
import React, { useState } from 'react';
import CreatePostForm from './CreatePost/CreatePost';

  

function App() {


  const [posts, setPosts] = useState([])
  //we pass in {posts} when instantiating the post, create posts, display posts
  
  function addNewPost(post){
    
    let tempPosts = [post, ...posts]

    setPosts(tempPosts);
  }

  return (
    <div className="App">
     <CreatePostForm addNewPostProperty = {addNewPost}/>
    </div>
  );
}

export default App;
