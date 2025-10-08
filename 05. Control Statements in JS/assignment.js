// Mini Assignment (Practice)
// 1.	Write a program that prints numbers 1 to 10 using a loop.
// 2.	Print only even numbers between 1 and 20.
// 3.	Create a program that checks grades using if...else if.
// 4.	Use a switch to print day names (1–7).

// 1. Print numbers 1 to 10 using a loop
document.write("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
// 2. Print only even numbers between 1 and 20
document.write("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + "<br>");
    }   
}
// 3. Check grades using if...else if
document.write("Grade Check:");
let marks = 75;
let grade;
if (marks >= 90) {
    grade = "A+";
}
else if (marks >= 80) { 
    grade = "A";
}
else if (marks >= 70) {
    grade = "B";
}
else {
    grade = "Fail";
}
document.write(`Marks: ${marks}, Grade: ${grade}<br>`);

// 4. Use a switch to print day names (1–7)
document.write("Day Names:");
let day = 4;
let dayName;
switch (day) {
    case 1:     
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;      
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
document.write(`Day ${day} is ${dayName}<br>`);
