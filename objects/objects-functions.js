let myBook = {
  title: "1984",
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: "A Peoples history",
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function(book) {
  return {
    summary:`${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)


//create function take in fahrenheit return object with all 3 numbers

let fahrenheitToCelsius = function (num){
  let celsius = (num - 32) * 5 / 9;
  return celsius
}

let convertFahrenheit = function(fahrenheit){
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9)
  }
}

let temps = convertFahrenheit(49)
console.log(temps)

