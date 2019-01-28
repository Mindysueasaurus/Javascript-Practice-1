let myBook = {
   title: "1984",
   author: 'George Orwell',
   pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//challenge
//Model a person: name, age, location
//Make a string using the values

let person = {
  name: 'Mindy',
  age: 37,
  location: 'San Antonio'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)