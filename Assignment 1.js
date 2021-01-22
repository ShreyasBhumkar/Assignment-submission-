// Question 1
// What will the code below output to the console and why ?
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

// Answers:-

// 1.(Ans:- 122) because 1 contains numeric datatype and 
// both the 2 contains string datatype that's why the answer is 122.

// 2.(Ans:- 32) because there is '+' sign occurs twice after 1 
// then the result is 1+2=3 and last 2 contain string datatype 
// that's why answer is 32. 

// 3.(Ans:- 02) here the result of '+' & '-' is 
// calculated as 0 and last 2 is a string that's why the answer is 02.

// 4.(Ans:- 112) here '+' sign occurs before 1 and there is no 
// value for '+' sign and remaining all is the string that's 
// why answer is 112.

// 5.(Ans:- NaN2) here the subtraction is not possible between 
// two character string thta's why the browser giving error 
// NaN (Not a Number) and 2 is string that's why is prints NaN2.

// 6.(Ans:- NaN) here the subtraction is not possible between 
// two character string that's why the browser giving error 
// NaN (Not a Number) and 2 is a numeric datatype that's 
// why it's prints only NaN.

// -------------------------------------------------------------------

// Question 2
// You are given a variable “marks”. Your task is to print:
// - AA if the mark is greater than 90
// - AB if the mark is greater than 80 and less than or equal to 90
// - BB if the mark is greater than 70 and less than or equal to 80
// - BC if the mark is greater than 60 and less than or equal to 70
// - CC if the mark is greater than 50 and less than or equal to 60
// - CD if the mark is greater than 40 and less than or equal to 50
// - DD if the mark is greater than 30 and less than or equal to 40
// - FF if the mark is less than or equal to 30

// Answer:- we can create if-else-if ladder to stisfying all 
// the above conditions. 
 
var marks = 95;
if(marks > 90){
    console.log("AA");
} else if(marks > 80 && marks <= 90){
    console.log("AB");
} else if(marks > 70 && marks <= 80){
    console.log("BB");
} else if(marks > 60 && marks <= 70){
    console.log("BC");
} else if(marks > 50 && marks <= 60){
    console.log("CC");
} else if(marks > 40 && marks <= 50){
    console.log("CD");
} else if(marks > 30 && marks <= 40){
    console.log("DD");
} else if(marks <= 30){
    console.log("FF");
}