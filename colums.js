// condition for box 1
const btn = document.getElementById("box");

let index = 0;

const colors = ["red", "green", "blue", "white"];

btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = colors[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});

// condition for box 2

const btn2 = document.getElementById("box2");

let index2 = 0;

const colors2 = ["red", "green", "blue", "white"];

btn2.addEventListener("click", function onClick() {
  btn2.style.backgroundColor = colors2[index2];

  index2 = index2 >= colors2.length - 1 ? 0 : index2 + 1;
});

// condition for box 3

const btn3 = document.getElementById("box3");

let index3 = 0;

const colors3 = ["red", "green", "blue", "white"];

btn3.addEventListener("click", function onClick() {
  btn3.style.backgroundColor = colors3[index3];

  index3 = index3 >= colors3.length - 1 ? 0 : index3 + 1;
});
