// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?

// Answer :-
// There are 4 ways to access HTML elements in the DOM — 
// by ID, 
// by class, 
// by HTML tag name, 
// and by query selector.

// 1. Accessing Elements by ID :- The easiest way to access a single 
// element in the DOM is by its unique ID. We can grab an element by ID 
// with the getElementById() method of the document object.
document.getElementById();
// In order to be accessed by ID, the HTML element must have an id attribute. 
// We have a div element with an ID of demo.
<div id="demo">Access me by ID</div>
// In the Console, let’s get the element and assign it to the demoId variable.
const demoId = document.getElementById('demo');
// Logging demoId to the console will return our entire HTML element.
console.log(demoId);
// output
<div id="demo">Access me by ID</div>

// 2. Accessing Elements by Class :- The class attribute is used to access 
// one or more specific elements in the DOM. 
// We can get all the elements with a given class name with the 
// getElementsByClassName() method.
document.getElementsByClassName();
// Now we want to access more than one element, and in our example we have two elements with a demo class.
<div class="demo">Access me by class (1)</div>
<div class="demo">Access me by class (2)</div>
// Let’s access our elements in the Console and put them in a variable called demoClass.
const demoClass = document.getElementsByClassName('demo');
// At this point, you might think you can modify the elements the same 
// way you did with the ID example. However, if we try to run the 
// following code and change the border property of the class demo 
// elements to orange, we will get an error.
console.log(demoClass);
// output 
// instead of just getting one element, we have an array-like object of elements.
(2) [div.demo, div.demo]

// 3. Accessing Elements by Tag :- A less specific way to access multiple 
// elements on the page would be by its HTML tag name. We access an element 
// by tag with the getElementsByTagName() method.
document.getElementsByTagName();
// For our tag example, we’re using article elements.
<article>Access me by tag (1)</article>
<article>Access me by tag (2)</article>
// Just like accessing an element by its class, 
// getElementsByTagName() will return an array-like object 
// of elements, and we can modify every tag in the document with a for loop.
const demoTag = document.getElementsByTagName('article');

for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '1px solid blue';
}
// The loop changed the border property of all article elements to blue.

// 4. Query Selectors :- If you have any experience with the 
// jQuery API, you may be familiar with jQuery’s method of 
// accessing the DOM with CSS selectors.
$('#demo'); // returns the demo ID element in jQuery
// We can do the same in plain JavaScript with the 
// querySelector() and querySelectorAll() methods.
document.querySelector();
document.querySelectorAll();
// To access a single element, we will use the querySelector() method. In our HTML file, 
// we have a demo-query element
<div id="demo-query">Access me by query</div>
// The selector for an id attribute is the hash symbol (#).
//  We can assign the element with the demo-query id to 
// the demoQuery variable.
const demoQuery = document.querySelector('#demo-query');
// we have two elements with the demo-query-all class applied to them.
const demoQueryAll = document.querySelectorAll('.demo-query-all');
// Using the forEach() method, we can apply the color green 
// to the border property of all matching elements.
demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
  });
// Using the query selector methods is extremely powerful, 
// as you can access any element or group of elements in 
// the DOM the same way you would in a CSS file.

// Question 2
// Write a javascript program that will take 2 numbers from the HTML page and display them on the
// HTML page after the addition of those 2 numbers.

// Answer :- 

function add()
     {
         var EnterFirstNumber = document.getElementById('num1').value;
         var EnterSecondNumber = document.getElementById('num2').value;
         
         var result = parseFloat(EnterFirstNumber)+parseFloat(EnterSecondNumber);

         if(!isNaN(result))
         {
             document.getElementById('num3').value = result;
         }
     }