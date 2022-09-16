
import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import CreatePostForm from './CreatePost/CreatePost';
import DisplayPosts from './DisplayPosts/DisplayPosts';


  

function App() {


  const [posts, setPosts] = useState([])
  //we pass in {posts} when instantiating the post, create posts, display posts

  //createPostForm is gathering new posts then passing them into [posts] => then DisplayPosts is mapping over the array of new [posts] and displaying/returning {post.name} & {post.body} 
  
//put Post inside of the body tag to keep filling up with divs

  function addNewPost(post){
    
    let tempPosts = [post, ...posts]

    setPosts(tempPosts);
  }

  return (
    <div className="App">
        <NavBar title1 = {'Social'} title2 = {'Feed'}/>
        <CreatePostForm addNewPostProperty = {addNewPost}/>
        <DisplayPosts parentPost = {posts}/>
    </div>
  );
}

export default App;
