//  Inserting Elements
// -------------------


// inserAdjacentElement
//  if we are insertin new custom element
function insertElement() {
  const filter = document.querySelector('.filter');   // reference element

  const h1 = document.createElement('h1') // element we want to insert
  h1.textContent = 'inserAdjacentElement';
  filter.insertAdjacentElement('beforebegin', h1); // (where to insert, element to insert)
}

insertElement();

// inserAdjacentText
//  if we are insertin new custom Text
function insertText() {
  const item = document.querySelector('li:first-child');
  item.insertAdjacentText('afterend', 'inserAdjacentText');
}

insertText();

// inserAdjacentHTML
//  if we are insertin new custom HTML
function insertHTML() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.insertAdjacentHTML('afterend', '<h2>inserAdjacentHTML</h2>');
}

insertHTML();

// insertBefore()
// First choose/bring in the parent, then choose an item inside that parent 
// that you want to insert your parent before


function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';    // created an element we want to insert

  const thirdItem = document.querySelector('li:nth-child(3)'); // chose 3rd element as a reference
  ul.insertBefore(li, thirdItem) // call parent and give element to insert before thirdItem 
}

insertBeforeItem();  // 'insertBefore' will be inserted before thirdItem (Oreos)


// Note: There is no insertAfter

/*
<!-- beforebegin -->  before the paragraph/ above the paragraph
<p>
  <!-- afterbegin -->  inside of it above all content
  foo
  <!-- beforeend-->    inside of it before all the content
</p>
<!-- afterend -->      after the paragraph
*/