// input 1
let n1 = document.getElementById("num1");

// input 2
let n2 = document.getElementById("num2");

// add btn
let addBtn = document.getElementById("add");
addBtn.textContent = "+";

// subtract btn
let subBtn = document.getElementById("subtract");
subBtn.textContent = "-";

// multiply btn
let mulBtn = document.getElementById("multiply");
mulBtn.textContent = "*";
 
// divide btn
let divBtn = document.getElementById("divide");
divBtn.textContent = "/";

// result
let result = document.getElementById("result");


// === operations ===
function add(a, b) {
    const res = parseInt(a.value) + parseInt(b.value);
    return res;
};

function subtract(a, b) {
    const res = parseInt(a.value) - parseInt(b.value);
    return res;
};

function multiply(a, b) {
    const res = parseInt(a.value) * parseInt(b.value);
    return res;
};

function divide(a, b) {
    const res = parseInt(a.value) / parseInt(b.value);
    return res;
};

// ==== btn onclick ====
addBtn.addEventListener("click", function() {
    result.textContent = add(n1,n2);
});

subBtn.addEventListener("click", function() {
    result.textContent = subtract(n1, n2);
});

mulBtn.addEventListener("click", function() {
    result.textContent = multiply(n1, n2);
});

divBtn.addEventListener("click", function() {
    result.textContent = divide(n1, n2);
})