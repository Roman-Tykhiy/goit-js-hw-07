const catUl = document.querySelectorAll("#categories");
const catItem = document.querySelectorAll(".item");





catUl.forEach(element => console.log(`Numbers of categories: ${element.children.length}`));
catItem.forEach(element => (
    console.log(`Category: ${element.children[0].textContent}`),
    console.log( `Element: ${element.children[1].children.length}`)
    
));

