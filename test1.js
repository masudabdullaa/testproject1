
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
btn2.addEventListener("click", function(){
    let x = 0;
    setInterval(() => {
        x++;
        if(x >= 11){
            x = 1;
            para1.textContent = x;
        }else {
            para1.textContent = x;
        }
    }, 1000);
});
btn3.addEventListener("click", function(){
    let randnum = Math.floor(Math.random() * 5) + 1;
    para2.textContent = randnum;
});

let calcInput = document.getElementById("calc-input");

function buttons(z){
    calcInput.value += z;

}

function calculation(){
    let m = calcInput.value;
    let evl = eval(m);
    calcInput.value = evl;
}
function clearAll(){
    calcInput.value = "";
}