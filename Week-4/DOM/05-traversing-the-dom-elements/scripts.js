
let output;

// Get Child Elements

const parent = document.querySelector('.parent');
output = parent.children;  // children is a property
output = parent.children[1];
output = parent.children[1].innerText;  // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName;   // DIV

parent.children[1].innerText = 'Child Two'; // changes Child 2 to Child Two
parent.children[1].style.color = 'red';  // Changes color to red

// firstElementChild and lastElementChild

parent.firstElementChild.innerText = 'Child One';   // Changes Child 1 to Child One
parent.lastElementChild.innerText = 'Child Three';  // Changes Child 3 to Child Three


// Get parent elemens from a child
const child = document.querySelector('.child');
output = child.parentElement;   // div.parent
child.parentElement.style.border = '1px solid #ccc';  // gives border to the parent

// Sibling Elements

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;     // second child
output = secondItem.nextElementSibling;  // Third child

output = secondItem.nextElementSibling.innerText;  // Child Three
secondItem.nextElementSibling.style.color = 'green';

secondItem.previousElementSibling.style.color = 'orange';




console.log(output);
