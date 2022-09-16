import React from 'react';
import '../App.css'

const NavBar = (props) =>{

    return(
   <nav className='navBar'>
        <h1 style={{margin: '1em'}}>{props.title1} 
        <medium className='text-muted'>{props.title2}</medium></h1>
   </nav>
    )
};
        

export default NavBar
       