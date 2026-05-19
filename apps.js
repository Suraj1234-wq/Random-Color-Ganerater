let btn1 = document.querySelector("#red");
let btn2 = document.querySelector("#green");
let btn3 = document.querySelector("#blue");
let btn4 = document.querySelector("#yellow");
let randomBtn = document.querySelector("#random");

btn1.addEventListener("click",function () {
  document.body.style.backgroundColor = "red";
});


btn2.addEventListener("click",function () {
  document.body.style.backgroundColor = "green";
});

btn3.addEventListener("click",function () {
  document.body.style.backgroundColor = "blue";
});

btn4.addEventListener("click",function () {
  document.body.style.backgroundColor = "yellow";
});
randomBtn.addEventListener("click", function () {
  let randomColor = "#" +Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});