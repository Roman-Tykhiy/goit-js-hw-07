const form = document.querySelector(".login-form")
form.style.display = "flex";
form.style.flexDirection = "column"
form.style.width = "408px"
form.style.alignItems = "center"

form.addEventListener("submit", handSab)

function handSab(event) {
    event.preventDefault();

    const element = event.target.elements;
    
    if (element.email.value.length < 1  ||  element.password.value.length < 1 ) {
    return alert('All form fields must be filled in')
    } else {
       const info = {
        email: element.email.value.trim(),
      password: element.password.value.trim()  
        } 
        console.log(info);
}
    
    
    event.target.reset();
}
