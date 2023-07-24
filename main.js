let editButton = document.querySelector('.body__section1_edit');
let saveButton = document.querySelector('.popUpWindow__container_button');
let closeButton = document.querySelector('.popUpWindow__container_close-button');
let editBlock = document.querySelector('.popUpWindow');



editButton.addEventListener('click',function(){
    editBlock.classList.toggle('popUpWindow_visibility');
})
closeButton.addEventListener('click',function(){
    editBlock.classList.toggle('popUpWindow_visibility');
})
saveButton.addEventListener('click',function(){
    editBlock.classList.toggle('popUpWindow_visibility');
})