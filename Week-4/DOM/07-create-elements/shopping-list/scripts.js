//  Creating elements in DOM

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World'; // Not recommended
// its better to create new text node with createTextNode() method
// then append it to the element

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(text);  // appends Hellow word at the end of html document

document.querySelector('ul').appendChild(div); // appends div to ul list

const list = document.querySelector('ul');
// list.querySelector('li').appendChild(div); // appends it to the first li