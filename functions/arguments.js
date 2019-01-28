let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result);

let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 34)
console.log(scoreText)

//challenge

let getTip = function (total, tipPercentage = .20) {
  let percent = tipPercentage * 100
  let tipTotal =  total * tipPercentage
  return `A ${percent}% tip on $${total} would be $${tipTotal}`
  
}

let tip = getTip(60)
console.log(tip)


console.log("Andrew" + ` Needs to stop`)