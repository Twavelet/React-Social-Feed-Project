import React, { useState } from 'react';


const CreatePostForm = (props) => {
    
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    
    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            body: body
        }
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }
    
    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label >Name</label>
                <input placeholder='Enter your name:' type='string' className='form-control' value = {name} onChange={(event) => setName(event.target.value)}/>
            </div>
            
            <div className='form-group'>
                <label >Body</label>
                <input placeholder='Type your new post here!' type='string' className='form-control' value ={body} onChange ={(event) => setBody(event.target.value)}/>
            </div>
            <div align="right">
            <button type = 'submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
    );
}
 
export default CreatePostForm;