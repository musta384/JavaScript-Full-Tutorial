
// Mouse Events

const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const doubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log(' right click event');
const onMouseDown = () => console.log(' mouse down event');
const onMouseUp = () => console.log(' mouse up event');
const onWheel = () => console.log(' mouse wheel event');
const onMouseOver = () => console.log(' mouse over event');
const onMouseOut = () => console.log(' mouse out event');
const onDragStart = () => console.log(' drag start event');
const onDrag = () => console.log(' drag event');
const onDragEnd = () => console.log(' drag end event');


// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', doubleClick);  // Double Click
logo.addEventListener('contextmenu', onRightClick) // right Click event
logo.addEventListener('mousedown', onMouseDown);  // Mouse down event = click and hold
logo.addEventListener('mouseup', onMouseUp);  // Mouse up event = when let go of hold
logo.addEventListener('wheel', onWheel);  // scroll over the logo
logo.addEventListener('mouseover', onMouseOver);  // happend when mouse is over the logo
logo.addEventListener('mouseout', onMouseOut);  // happend when mouse leaves the logo
logo.addEventListener('dragstart', onDragStart); // When drag starts
logo.addEventListener('drag', onDrag);       // while dragging
logo.addEventListener('dragend', onDragEnd);   // when drag ends









