let  a = document.getElementById('g1');
let b = document.getElementById('menu_1');
let c = document.querySelector('body');

a.onclick = function(){
    a.classList.toggle("open_btn");
    b.classList.toggle("show"); 
    c.classList.toggle('hidden');
}
// let hid = document.querySelector(".show");
// if(hid != null){
//     document.body.style.overflow = 'hidden';
// }
// b.onmousewheel = function(){
//     b.style.overflow = 'hidden';
// }


