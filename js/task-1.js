const catUl = document.querySelector("#categories");
const catItem = document.querySelectorAll(".item");
console.log(`Numbers of categories:${catUl.children.length}`);
catItem.forEach(element => (
    console.log(`Category: ${element.children[0].textContent}`),
    console.log( `Element: ${element.children[1].children.length}`)
    
));

