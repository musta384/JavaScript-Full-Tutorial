
// Shopping List

output = document.images;
output = document.images[0];
output = document.links[0];
output = document.forms;
output = document.forms[0];

console.log(output)

// HTMLCollection is an array like but not array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));



