// Note
// A comment is looked at as a specific type of node
// Whitespace is counted as text

let output;

const parent = document.querySelector('.parent');
output = parent.childNodes; // NodeList [text, comment, text, div.child, text, div.child, text, div.child, text]
output = parent.childNodes[1];  // <!-- Children -->
output = parent.childNodes[5].innerText;   // Child 2

parent.childNodes[5].style.color = 'red';   // Changes color of Child 2
output = parent.childNodes[5].innerText = 'Child Two';  // Changes Child 2 to Child Two

// firstChild and lastChild

output = parent.firstChild; // #text, as it is whitespace
output = parent.lastChild;
parent.lastChild.textContent = 'Hello';  // inserts 'Hello' text

// Getting Parent Node from the Child
const child = document.querySelector('.child');
output = child.parentNode;   // div.parent
output = child.parentElement; // same output

child.parentNode.style.backgroundColor = '#ccc';  // changes background of the parent
child.parentNode.style.padding = '10px';

// Getting Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;

output = secondItem.nextSibling;  // #text, as it is a text node (whitespace)
output = secondItem.previousSibling;
console.log(output);   
