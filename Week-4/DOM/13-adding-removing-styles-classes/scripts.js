const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
  // className
  // console.log(itemList.className);
  // text.className = 'dark';    // This overrides the card class
  // text.className = 'card dark';  // without overwriting card

  // classList
  // console.log(itemList.classList);     // returns DOMTokedList, list of classes
  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add('dark');    // adds dark class to an existing class
  // text.classList.remove('card');  // removes card class

  // text.classList.toggle('dark');     // adds or removes dark on each click. used to create dark mode
  // text.classList.toggle('hidden');

  // text.classList.replace('card', 'dark')   // replaces card with dark


  // Change Style 
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'green';
    }
  });
}

document.querySelector('button').onclick = run;
