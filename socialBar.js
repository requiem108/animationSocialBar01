const socialBar=document.querySelector('.socialBar');
socialBar.addEventListener('animationend',(event)=>{
    let objt=event.currentTarget;
    objt.classList.remove('socialBar')
    objt.classList.add('ColocarBar');

})