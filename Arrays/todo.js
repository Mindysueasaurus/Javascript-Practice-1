const todo = ['Walk the dog', 'Feed the cats', 'Go to Walmart', 'Pick up prescriptions', 'Call mom']
const todoCount  = todo.length 

console.log('You have', todoCount, 'todos')
console.log('Todo:', todo[0])

console.log('Todo:', todo[todo.length - 2])

console.log(todo.splice(2, 1))
console.log(todo.push('This is my new todo'))
console.log(todo)
console.log(todo.shift())
console.log(todo)

todo.forEach(function(item,index){
  console.log(`${index + 1}. ${item}`)
})

for(let count = 0; count < todo.length; count++){
  const num = count + 1
  const todos = todo[count]
  console.log(`${num}. ${todos}`)
}