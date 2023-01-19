let a = document.getElementById("g");
let b = document.getElementById("g1");
let c = document.getElementById("a");
// console.log(c);
let x = document.getElementById("a1");
let z = document.getElementById("c");
let s = document.getElementById("c1");

let g=1;
setInterval(()=>{
    c.style.transform = `rotate(${g+'deg'})`;
    // z.style.transform =  `rotate(${g+'deg'})`;
    g+=x1;
    g++;

},100)
let g1=1;
setInterval(()=>{
    // c.style.transform = `rotate(${g+'deg'})`;
    z.style.transform =  `rotate(${g+'deg'})`;
    g1+=x2;
    g1++;

},100)

document.addEventListener("mousemove", mouseX);
let x1=1;
let x2=1;

function mouseX(e){
  x1 = e.offsetX/50;
  x2 = e.offsetX/70;
    
}


