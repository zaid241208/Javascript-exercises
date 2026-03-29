// -----------------=================||||<<< NEW CHAPTER >>>>||||=================-----------------

// <!-- ---===||   CHAPTER 3   ||===--- -->

// <!-- ---answer 1 --- -->

// let age;

// age = 20

// alert(`i am ${age} years old`)



// <!-- ---answer 2 --- -->
// localStorage.removeItem("visit_count")

// let visit_count = localStorage.getItem("visit_count");

// if (visit_count === null) {
//     visit_count = 1;
// } else {
//     visit_count = Number(visit_count) + 1;
// }

// localStorage.setItem("visit_count", visit_count);

// document.getElementById("visit_count").innerHTML = 
// `you visited ${visit_count} times`



// <!-- ---answer 3 --- -->

// let birthYear;

// birthYear = 2006;

// document.getElementById("js").innerHTML = 
// `My birthYear is ${birthYear} <br> Data type of my ddeclarede variable is number`



// <!-- ---answer 4 --- -->

let store;

store = "Zaid Computer Zone";

let v_name;
let p_name;
let p_quantity;

v_name = prompt("your name")
p_name = prompt("product name")
p_quantity = prompt("product quantity")

document.getElementById("js").innerHTML =
    `${v_name} ordered ${p_quantity} ${p_name}  from ${store}`;