import React, { useState } from 'react';
import './LikeDislikeButton.css'


const LikeDislikeButton = () => {

    const [likeButtonClass, setLikeButtonClass] = useState('')
    const [dislikeButtonClass, setDislikeButtonClass] = useState('')

    function handleLike(){
        if(likeButtonClass === "" || likeButtonClass === "dislike"){
            setLikeButtonClass('like')
            setDislikeButtonClass('')
        }

    }
    function handleDislike(){
        if(dislikeButtonClass === "" || setDislikeButtonClass === ''){
            setDislikeButtonClass ('dislike')
            setLikeButtonClass('')
        }

    }
        return (
            <div id="fb-root" className='buttonsDiv' align="right">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link>
            <button className={likeButtonClass}><i onClick={()=> handleLike()} className='fa fa-thumbs-up'></i>
            </button>
            <button  className={dislikeButtonClass}><i onClick={()=> handleDislike()} className='fa fa-thumbs-down'></i>
            </button>
            </div>
        )

}


export default LikeDislikeButton