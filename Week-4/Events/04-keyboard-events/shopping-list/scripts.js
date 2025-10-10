
/* Keyboard Events
    keyPress
    keyUp
    keyDown
*/

const itemInput = document.getElementById('item-input');  // targeting the input field

const onKeyPress = (e) => {
  console.log('keypress');
}

const onKeyUp = (e) => {
  console.log('keyup');
}

const onKeyDown = (e) => {
  // console.log('keydown');

  // key
  console.log(e.key);    // logs every key is pressed

  if (e.key === 'Enter') {
    alert('You pressed enter');
  }

  // keyCode
  if (e.keyCode === 13) {
    alert('You clicked enter');
  }

  // code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrltKey);
  console.log('Alt: ' + e.altKey);

}

// itemInput.addEventListener('keypress', onKeyPress);  // when press the key
// itemInput.addEventListener('keyup', onKeyUp);   // when releasing the key
itemInput.addEventListener('keydown', onKeyDown);  // when press and hold

