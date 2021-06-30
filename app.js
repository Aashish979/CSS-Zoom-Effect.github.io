window.onload =function(){


//SMS APP
// SMS APP

let theText= document.querySelector('#text-area');
let charCount= document.querySelector('#char-count');
theText.addEventListener('keyup' , function(){
    let textLength= theText.value.length
    charCount.innerText=textLength;
});


    
}
