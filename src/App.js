
import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import CreatePostForm from './CreatePost/CreatePost';
import DisplayPosts from './DisplayPosts/DisplayPosts';
import './App.css'

  

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
    <main className='main'>
      <div>
        <NavBar title1 = {'Social'} title2 = {'Feed'}/>
      </div>
    <div className="container-fluid">
      <div className='mainFeed'>
        <div className='createPost'>
          <CreatePostForm addNewPostProperty = {addNewPost}/>
        </div>
        <div className='displayPost' >
          <DisplayPosts parentPost = {posts}/>
        </div>

        </div>
    </div>
    </main>
  );
}

export default App;
