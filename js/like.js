"use strict";

let likes = document.querySelectorAll('#like');

likes.forEach(like => {
    like.addEventListener('click', function(){
        like.classList.toggle('likeSVGclick');
    })
    
});
