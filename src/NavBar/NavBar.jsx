import React from 'react';

const NavBar = (props) =>{

    return(
   <nav>
        <h1 style={{margin: '1em'}}>{props.title1} 
        <medium className='text-muted'>{props.title2}</medium></h1>
   </nav>
    )
};
        

export default NavBar
       