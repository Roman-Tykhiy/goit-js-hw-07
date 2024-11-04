const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", handInput);
function handInput(event) {
    const inputT = event.target.value.trim();
    console.log(inputT);
    
    if (inputT.length >= 1) {
        output.textContent = event.target.value;
    } else {
    output.textContent = "Anonymous"
    }
    
      
}

