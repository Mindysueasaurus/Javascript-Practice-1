let greetUser = function () {
  console.log('Welcome User! ')
}

greetUser();

let square =  function (num) {
  let result = num * num;
  return result;
}

let value = square(3);
let OtherValue = square(10);

console.log(value);
console.log(OtherValue);

//challenge

//convert fahrenheit to celsius
let fahrenheitToCelsius = function (num){
  let celsius = (num - 32) * 5 / 9;
  return celsius
}

//call a couple of times 32 > 0 68 > 20
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(68))

//print converted values

