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



// <!-- ---answer 5 --- -->

// <!-- ---(A) --- -->

// var a;

// a = 4;

// if (++a === 7) {
//     alert("given condition for variable b is true");
// }

// <!-- ---(B) --- -->

// var b;

// b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// <!-- ---(C) --- -->

// var c;

// c = 12;

// if (c++ === 13) {
//     alert("condition 1 is true");
// }

// if (c === 13) {
//     alert("condition 2 is true");
// } 

// if (c === 14) {
//     alert("condition 4 is true");
// }


// <!-- ---(D) --- -->

// var materialCost;

// var laborCost;

// var totalCost;

// materialCost = 20000;
// laborCost = 2000;
// totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert('The cost equals');
// }

// <!-- ---(E) --- -->

// if (ture) {
//     alert("True")
// }
// if (false) {
//     alert("False");
// }

// <!-- ---(F) --- -->

// if ("car" < "cat"){
//     alert("car is smaller than cat")
// }



// <!-- ---answer 6 --- -->

// let sub1;
// let sub2;
// let sub3;

// sub1 = +prompt("Enter sub1 Marks");
// sub2 = +prompt("Enter sub2 Marks");
// sub3 = +prompt("Enter sub3 Marks");

// let totalMarks;
// totalMarks = 300;

// let obtainedMarks;
// obtainedMarks = (sub1 + sub2 + sub3)

// let percentage;
// percentage = (obtainedMarks / totalMarks) * 100;

// if (sub1 < 0 || sub1 > 100 ||
//     sub2 < 0 || sub2 > 100 ||
//     sub3 < 0 || sub3 > 100
// ) {
//     alert("Enter correct Marks please!")
// } else {

//     let grade;
//     let remarks;

//     if (sub1 < 33 || sub2 < 33 || sub3 < 33) {
//         grade = "Fail";
//         remarks = "Sorry"
//     } else if (percentage >= 80) {
//         grade = "A-One";
//         remarks = 'Excellent';

//     } else if (percentage >= 70) {
//         grade = "A";
//         remarks = "Good";

//     } else if (percentage >= 60) {
//         grade = "B";
//         remarks = "You need to improve";

//     } else if (percentage < 60) {
//         grade = "Fail";
//         remarks = "Sorry";
//     } else {
//         "Enter correct Marks/Percentage"
//     }

//     let color;

//     if (grade === "Fail") {
//         color = "red";
//     } else {
//         color = "green";
//     }

//     document.getElementById("js").innerHTML =
//         `<h2>Mark Sheet</h2>
//         <p>Total Marks : ${totalMarks}</p>
//         <p>Marks Obtained : ${obtainedMarks}</p> 
//         <p>Percentage : ${percentage}%</p>
//         <p style="color:${color}">Grade : ${grade}</p>
//         <p>Remarks : ${remarks}</p>`;
// }



// <!-- ---answer 7 --- -->

// let user_Number;
// let secret;
// let result;

// secret = Math.floor(Math.random() * 10) + 1;

// user_Number = +prompt("Guess the number from 1 to 10");

// if (user_Number === secret) {
//     alert("Bingo! Correct answer")
// } else if (user_Number === secret + 1 || user_Number === secret -1) {
//     alert("close enough")
// } else {
//     alert("try again");
// }



// <!-- ---answer 8 --- -->

// let user;

// user = +prompt("Enter value to find");

// if( user % 3 === 0) {
//     alert("Value is divisible by 3")
// } else {
//     alert("value isn't divisible by 3")
// }



// <!-- ---answer 9 --- -->

// let num;

// num = +prompt("Enter number to find");

// if(num % 2 === 0) {
//     alert("value is even")
// } else {
//     alert("value is odd")
// }



// <!-- ---answer 10 --- -->

// let temp;

// temp = +prompt("Enter Temperature");

// if (temp > 40) {
//     alert("its too hot outside")
// } else if (temp > 30) {
//     alert("weather today is normal")
// } else if (temp > 20) {
//     alert("today's weather is cool")
// } else if (temp > 10) {
//     alert("omg! weather is so cool")
// } else {
//     alert("It's cold outside")
// }



// <!-- ---answer 11 --- -->

// let first;
// let second;
// let third;


// first = +prompt("Enter first value");
// second = prompt("enter what you want to do +, -, *, /, % ");
// third = +prompt("Enter second value");

// if (second === "+") {
//     alert(first + third)
// } else if (second === "-") {
//     alert(first - third)
// } else if (second === "*") {
//     alert(first * third)
// } else if (second === "/") {
//     alert(first / third)
// } else if (second === "%") {
//     alert(first % third)
// } else {
//     alert("Please check your given value")
// }
