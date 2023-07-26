// pop up window
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

// heart button

let heartButton = document.querySelectorAll('.main__card_heart');
for (let i=0; i<heartButton.length; i++){
    heartButton[i].addEventListener('click',function(){
    heartButton[i].classList.toggle('blackHeart');
})}

console.log(heartButton[0].classList.contains('blackHeart'));
console.log(heartButton[1].classList.contains('main__card_heart'));
console.log(heartButton[2].classList.contains('blackHeart'));
console.log(heartButton[3].classList.contains('blackHeart'));