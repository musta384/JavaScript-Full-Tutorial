// Form Submission

const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();  // it doesnt submit to the file
  // console.log('submit');

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill all fields');
    return;
  }
  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  // console.log(formData); 

  const item = formData.get('item'); // we are accessing the item using the (name = item)
  const priority = formData.get('priority'); // we are accessing the item using the (name = item)

  // entries() method
  const entries = formData.entries();
  // console.log(entries);

  for (let entry of entries) {
    // console.log(entry);
    console.log(entry[1]);

  }

  // console.log(item, priority);
}


form.addEventListener('submit', onSubmit2);