const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//functions

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


//listeners

btn.addEventListener("click", function () {
  // console.log(document.body);
  // get random number btw 0-3
  let hexColor = '#';
  for (let i = 0; i<6;i++){
      hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});