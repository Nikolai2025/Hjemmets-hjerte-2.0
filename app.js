//vælger hamburger ikonet giver den en varible 
let menu = document.querySelector('#hamburger')
//vælger navbaren og giver den en varibel
let nav = document.querySelector('.navbar')
// Menu onclick gør at der sker noget man klikker på hamburgeren
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open')
}
