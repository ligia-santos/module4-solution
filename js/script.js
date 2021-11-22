// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:

/*
 ------------------
| EXPECTED OUTPUT: |
 ------------------
| Hello Yaakov     |
| Good Bye John    |
| Good Bye Jen     |
| Good Bye Jason   |
| Hello Paul       |
| Hello Frank      |
| Hello Larry      |
| Hello Paula      |
| Hello Laura      |
| Good Bye Jim     |
 ------------------
*/

(function () {
  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let firstLetter = name.charAt(0)

    if (firstLetter.toLowerCase() === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();