
// Mapping the values of an array

// map() method 

// Sometimes you'll need to change all the values in an array.
// This method will return a new array with all the new values.

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumber = numb.map(number => number * 2);
console.log(doubledNumber);

// using forEach()
const doubleNum = [];
numb.forEach(number => doubleNum.push(number * 2)
);
console.log(doubleNum);

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

// Create array of company Names
const companyNames = companies.map((company) => company.name)
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category
  }
})
console.log(companyInfo);

// Create an array of objects with the names and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years.'
  }
})
console.log(companyYears);