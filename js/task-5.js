const widget = document.querySelector(".widget");
const buton = document.querySelector(".change-color");
const color = document.querySelector(".color");
buton.addEventListener("click", () => {
  let chengeColor = getRandomHexColor();
  widget.style.backgroundColor = chengeColor;
  color.textContent = chengeColor;
  
});




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}


