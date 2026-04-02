// -----------------=================||||<<< NEW CHAPTER >>>>||||=================-----------------

// <!-- ---===||   CHAPTER 6   ||===--- -->

// <!-- ---answer 1 --- -->

// let number;


// number = 11;

// a = 10;

// document.getElementById("js").innerHTML =
//     `Result: <br> The value if a is: ${a} <br><br>

//     ------------------------------------- <br><br>

//     The value of ++a is: ${++a} <br>
//     Now the value of a is: ${a} <br><br>

//     The value of a++ is: ${a++} <br>
//     Now the value of a is:${a} <br><br>

//     The value of --a is: ${--a}<br>
//     Now the value of a is:${a} <br><br>

//     The value of a-- is: ${a--}<br>
//     Now the value of a is:${a}
//     `



// <!-- ---answer 2 --- -->

// var a,b;

// a = 2;
// b = 1;

// var Result = --a - --b + ++b + b--;

// document.getElementById("js").innerHTML = 
// `
// a is: ${a} <br>
// b is: ${b} <br>
// result is: ${Result}
// `



// <!-- ---answer 3 --- -->

// let username;

// username = prompt("Enter your name");

// document.getElementById("js").innerHTML =
//     `Hello ${username} <br> 
//     Welcome to our page!`



// <!-- ---answer 4 --- -->

// let number;

// number = prompt("Enter number");

// if (number === "") {
//     number = 5;
// }

// number = Number(number);

// document.getElementById("js").innerHTML =
//     `<h2>Multiplication Table of ${number}<h2>`

// for (var i = 1; i <= 10; i++) {
//     document.getElementById("js").innerHTML +=
//     `${number} x ${i} = ${number * i} <br>`
// }



// <!-- ---answer 5 --- -->

let sub_1;
let sub_2;
let sub_3;

let total;

let t_marks;
let t_obt;
let t_perc;

sub_1 = prompt("Enter subject 1");
sub_2 = prompt("Enter subject 2");
sub_3 = prompt("Enter subject 3");

total = 100;

let obt_marks_1 = +prompt("Enter " + sub_1 + " obtained marks");
let obt_marks_2 = +prompt("Enter " + sub_2 + " obtained marks");
let obt_marks_3 = +prompt("Enter " + sub_3 + " obtained marks");

let perc_1;
let perc_2;
let perc_3;

perc_1 = (obt_marks_1 / total) * 100;
perc_2 = (obt_marks_2 / total) * 100;
perc_3 = (obt_marks_3 / total) * 100;

t_marks = total + total + total;
t_obt = obt_marks_1 + obt_marks_2 + obt_marks_3
t_perc = (t_obt / t_marks) * 100;

document.getElementById('js').innerHTML =
    `
<table border="1">
    <tr>
        <th>Subject 1</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>

    <tr>
        <td>${sub_1}</td>
        <td>${total}</td>
        <td>${obt_marks_1}</td>
        <td>${(obt_marks_1 / total) * 100} %</td>
    </tr>
    <tr>
        <td>${sub_2}</td>
        <td>${total}</td>
        <td>${obt_marks_2}</td>
        <td>${(obt_marks_2 / total) * 100} %</td>
    </tr>
    <tr>
        <td>${sub_3}</td>
        <td>${total}</td>
        <td>${obt_marks_3}</td>
        <td>${(obt_marks_3 / total) * 100} %</td>
    </tr>

    <tr>
        <td>""</td>
        <td>${t_marks}</td>
        <td>${t_obt}</td>
        <td>${t_perc} %</td>
</table>
`