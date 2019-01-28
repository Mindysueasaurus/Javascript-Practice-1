let fahrenheitToCelsius = function (num){
  let celsius = (num - 32) * 5 / 9;

  if (celsius <= 0) {
    let isFreezing = true
  }
  
  return celsius
}

//call a couple of times 32 > 0 68 > 20
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(68))
