// Event - Object

const logo = document.querySelector('img');

// logo.addEventListener('click', function (e) {   // it takes e or evt or event for event-object
//   console.log(e);    // displays event objects ( as PointerEvent)
// });

function onClick(e) {
  // console.log(e.target);   // logs image, mostly used
  // console.log(e.currentTarget);    // same, logs image. does same thing. bcs nothing is nested in img
  // e.target.style.backgroundColor = 'black';   // bonus
  // console.log(e.type);   // click
  // console.log(e.timeStamp);  
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.pageX);
  // console.log(e.pageY);
  // console.log(e.screenX);
  // console.log(e.screenY);
}


function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y${e.clientY}`;
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

/* 
But  e.target and e.currentTarget can be different in the following use
document.body.addEventListener('click', function (e) {
  console.log(e.target);   // logs <li>...</li>, as i clicked on list items
  console.log(e.currentTarget);   // logs <body>...</body>, as the event listener is attached to the body
});
*/

document.querySelector('a').addEventListener('click',
  function (e) {
    e.preventDefault();   // prevents default event. the link will not open
    // used when we have a form and we dont want to submit to the page
    console.log('Links was Clicked')
  }
)

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (The are the same in this case)
- `type` - The type of event that was triggered 
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/