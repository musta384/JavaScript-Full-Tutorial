
// Filtering an array

// filter() method

// We can use the built-in filter() method on an array to alter which values are in the
// array. The filter method takes a function as an argument, and this function should
// return a Boolean. If the Boolean has the value true, the element will end up in the
// filtered array. If the Boolean has the value false, the element will be left out

let arr1 = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
  return typeof element === "string";
}
let filterArr = arr1.filter(checkString);
console.log(filterArr);

// the original array has not changed, the filter()
// method returns a new array with the elements that made it through the filter. We
// capture it here in the variable filterArr.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
})
console.log(evenNumbers);

// Shorter version
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// Using forEach()
// numbers.forEach(number => number % 2 === 0);
// console.log(evenNumbers);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1982, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1993, end: 2003 },
  { name: 'Company Four', category: 'Retail', start: 1987, end: 2009 },
  { name: 'Company Five', category: 'Technology', start: 1998, end: 2006 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2004 },
  { name: 'Company Seven', category: 'Auto', start: 1985, end: 2001 },
  { name: 'Company Eight', category: 'Retail', start: 1990, end: 2005 },
  { name: 'Company Nine', category: 'Technology', start: 1988, end: 2001 }
]

// Get only Retail Companies
const retailCompanies = companies.filter(function (company) {
  return company.category === 'Retail';
});
console.log(retailCompanies);

// Get companis that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end >= 2005
);
console.log(earlyCompanies);

// Get companies that lasted 10 yeras or more
const oldCompanies = companies.filter(
  (company) => company.end - company.start > 10
);
console.log(oldCompanies);