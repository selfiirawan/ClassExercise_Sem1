// part 1
let heading = document.getElementById("heading");
heading.textContent = "DOM Manipulation Challenge";

let description = document.getElementById("description");
description.textContent = "Use JS to modify this webpage";

let box = document.getElementById("box");
box.style.backgroundColor = "blue";

let button = document.createElement("button");
button.textContent = "Click Me";

let container = document.getElementById("container");
container.appendChild(button);

// part 2
button.addEventListener("click", function() {
    description.textContent = "Congratulations! You completed the DOM Manipulation Challenge!";
    button.remove();
})

box.onmouseover = function() {
    box.style.opacity = "0.5";
};

box.onmouseout = function() {
    box.style.opacity = "1";
}

box.onclick = function() {
    box.remove();
};