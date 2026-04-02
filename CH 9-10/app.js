// -----------------=================||||<<< NEW CHAPTER >>>>||||=================-----------------

// <!-- ---===||   CHAPTER 9   ||===--- -->

// <!-- ---answer 1 --- -->

// let city = prompt("Enter city name").toLocaleLowerCase();

// let cities = {
//     karachi: "City of Lights",
//     lahore: "City of Gardens",
//     islamabad: "Green City",
//     peshawar: "City of Flowers",
//     quetta: "Fruit Garden of Pakistan"
// };

// if (cities[city]) {
//     document.getElementById("js").innerHTML =
//         `Welcome to ${cities[city]}`;
// } else {
//     document.getElementById("js").innerHTML =
//         `City not found`;
// }



// <!-- ---answer 2 --- -->

// let gender = prompt("Enter Your Gender").toLowerCase();

// if (gender === "male") {
//     document.getElementById("js").innerHTML =
//         `Good morning Sir`
// } else if (gender === "female") {
//     document.getElementById("js").innerHTML =
//         `Good morning Ma'am`
// } else {
//     document.getElementById("js").innerHTML =
//         `Why are you gayyy????`
// }



// <!-- ---answer 3 --- -->

// let color;

// let red;
// let yellow;
// let green;

// let message;

// color = prompt("Enter color of road traffic signal light").toLowerCase();

// if (color === "red") {
//     message = "Must Stop"
// } else if (color === "yellow") {
//     message = "Ready to go"
// } else if (color === "green") {
//     message = "Move now"
// } else {
//     document.getElementById("js").innerHTML = 
//     `invalid color`
// }
// document.getElementById("js").innerHTML =
//     `<table border="1">
//         <tr>
//             <td>Signal Color</td>
//             <td>message</td>
//         </tr>
//         <tr>
//             <td>${color}</td>
//             <td>${message}</td>
//     </table>`;



// <!-- ---answer 4 --- -->

// let fuel;

// fuel = +prompt("Enter current fuel in car");

// if (fuel <= 0.25) {
//     document.getElementById("js").innerHTML = 
//     "Please refil the fuel in your car"
// } else {
//     document.getElementById("js").innerHTML = 
//     "Fuel level is fine";
// }