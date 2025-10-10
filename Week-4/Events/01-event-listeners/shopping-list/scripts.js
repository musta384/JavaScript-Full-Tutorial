// Event Listeners


// Javascript Event Listener
const clearBtn = document.querySelector('#clear');


function onClear() {
  alert('Clear Item');
}

// clearBtn.onclick = function () {
//   alert('Clear Items');
// };


// addEventListner()
// It takes in type of event and callback function
// We can have as many event listeners as we want

/*
clearBtn.addEventListener('click', function () {
  alert('Clear Items');
});

clearBtn.addEventListener('click', function () {
  console.log(('Clear Items'));   // console logs after the above alert, bcs alert is a blocking operaration
});

*/

// We can pass onClear function as function Callback
// clearBtn.addEventListener('click', onClear);   // we dont need () as it is callback function

// removeEventListener()
// used when we want to remove an element from the DOM

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);  
// Event listener will be removed after 5 second.

// setTimeout(() => clearBtn.click(), 5000);  // script do the task after 5 seconds by itself


// Challenge, clear all the items when clear button is clicked

function clearAllItems() {
  const itemlist = document.querySelector('ul');
  const items = itemlist.querySelectorAll('li');

  // itemlist.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);  // will remove firstchild until no more
  }


}
clearBtn.addEventListener('click', clearAllItems);


