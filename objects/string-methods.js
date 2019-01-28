let name = '  Mindy harris '

//length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//includes method
let password = 'abc123password0098'
console.log(password.includes('eleven'))

//trim 
console.log(name.trim())

//challenge

let isPasswordValid = function (password) {
  return password.length > 8 && !password.includes('password')
    
}

console.log(isPasswordValid('asdfp'))
console.log(isPasswordValid('abc12347983021'))
console.log(isPasswordValid('kfnlsnflwpassword'))