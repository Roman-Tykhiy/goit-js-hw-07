const input = document.querySelector(".input");
const create = document.querySelector(".create");
const destroy = document.querySelector(".destroy");
const box = document.querySelector("#boxes");
box.style.display = "flex";
box.style.flexWrap = "wrap";
box.style.gap = "44px";

let sizes = 30;


create.addEventListener("click", handCreate);
destroy.addEventListener("click", handDestroy);

function handDestroy() {
  box.innerHTML = "";
  input.value = "";
}

function handCreate() {
  sizes = 30;
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    console.log("error");
  }
  createBox(+input.value);
};

function createBox(amount) {
  let chengeDiv = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const myBox = document.createElement("div");
      myBox.style.width = `${sizes}px`;
      myBox.style.height = `${sizes}px`;
      myBox.style.backgroundColor = getRandomHexColor();
      chengeDiv.appendChild(myBox);
      sizes += 15;
      box.innerHTML = "";
      input.value = "";
  }
  box.append(chengeDiv);
  }




















function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
