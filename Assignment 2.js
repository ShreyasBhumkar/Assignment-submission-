//  Question 1
// What is the value of clothes[0] and why?
// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);

// Answer: - The output of above code snipped is
// 'Uncaught SyntaxError: redeclaration of const clothes'
// Because we declare array using 'const' keyword and anything 
// we declare using 'const' means that having a fixed value it 
// cannot be changed and here clothes.length = 0; redeclare 
// the length of an array that's why it giving the error.

// Question 2
// Write a Javascript program to find the sum of all elements 
// of a given array?

// Answer: -

const clothes = ['jacket' , 't-shirt'];
    s = 0;
    i;
for (var i = 0; i < clothes.length; i++) 
   {
    s += clothes[i];
    }
console.log('Sum : '+s ); 

// output  :  0jackett-shirt


