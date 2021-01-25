// Question 1
// Write a JavaScript program to display the reading status (i.e. display book name, author name,
// and reading status) of the following books.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

// The output should look like this:
// Already read 'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne
// Collins.
    
// Answer :-
    console.log("Already read" + " " + " ' " + library[0].author + " ' " + " " + "by" + " " + library[0].title + ".");
    console.log("Already read" + " " + " ' " + library[1].author + " ' " + " " + "by" + " " + library[1].title + ".");
    console.log("You still need to read" + " " + " ' " + library[2].title + " ' " + " " + "by" + " " + library[2].author + ".");

// Question 2
// Write a javascript program that generates an alert "Not legal age to drive" if the driver age is
// below 18 years old, if driver age is greater than or equal to 18, it generates an alert "Drive safe".

// Answer :- The following program gives an alert of "Drive safe" because the driver age is 20.
var driverAge = 20;
if(driverAge < 18){
  alert('"' + "Not legal age to drive" + '"');
} else{
  alert('"' + "Deive safe" + '"');
}