
// Replacing Items

// Using replaceWith()
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First Item';

  firstItem.replaceWith(li);
}

// Using outerHTML
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2');

  secondItem.outerHTML = '<li>Replaced Second Item</li>'
}

// Replace all the items in the list
function replaceAll() {
  const lis = document.querySelectorAll('li');  // Returns a list of nodes

  lis.forEach((item, index) => {
    // item.outerHTML = '<li>Replace All</li>';  // Using outerHTML
    if (index === 1) {
      item.innerHTML = 'Second Item';
    } else
      item.innerHTML = 'Replace All';              // Using innerHTML
  });

  // lis.forEach((item, index) =>
  // (item.innerHTML = index === 1 ? '<li>Second Item<li/>' :
  //   '<li>item</li>')
  // );
}


// Select the parent and use replaceChild() method
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}



replaceFirstItem();
replaceSecondItem();
replaceAll();
replaceChildHeading();