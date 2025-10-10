// Input Events

const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.getElementById('h1');  // just to use it to output something


function onInput(e) {
  // console.log(e.target);  // gives the target which is input field
  console.log(e.target.value);    // gives whatever is in the form field
}

function onChecked(e) {
  console.log(e.target.checked);  // checked ? true : false
}

function onFocus(e) {
  console.log('Input is Focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';


}

function onBlur(e) {
  console.log('Input is not Focused');
  itemInput.style.outlineStyle = 'none';

}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);  // works same
checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);





