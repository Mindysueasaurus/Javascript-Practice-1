// const todo = ['Walk the dog', 'Feed the cats', 'Go to Walmart', 'Pick up prescriptions', 'Call mom']
const todos = [{
  text:'Walk the dog', 
  completed: false
},
{
  text:'Feed the cats',
  completed: false
} , 
{
  text: 'Go to Walmart',
  completed: true
 },
 {
   text:'Pick up prescriptions',
   completed: true
 } , 
 {
   text: 'Call mom',
   completed: false
 }]
// const todoCount  = todo.length 

// console.log('You have', todoCount, 'todos')
// console.log('Todo:', todo[0])

// console.log('Todo:', todo[todo.length - 2])

// console.log(todo.splice(2, 1))
// console.log(todo.push('This is my new todo'))
// console.log(todo)
// console.log(todo.shift())
// console.log(todo)

// todo.forEach(function(item,index){
//   console.log(`${index + 1}. ${item}`)
// })

// for(let count = 0; count < todo.length; count++){
//   const num = count + 1
//   const todos = todo[count]
//   console.log(`${num}. ${todos}`)
// }

//convert array to array of objects -> Text, completed
//create a function to remove a todo by text value

const deleteTodo = function(todos, text) {
  const index = todos.findIndex(function(todo ){
    return todo.text.toLowerCase() === text.toLowerCase()
  })
  if (index > -1) {
    todos.splice(index, 1)
  }
}

const getThingsToDo = function(todos){
  return todos.filter(function(todo) {
     return !todo.completed 
    
  })

}

console.log(getThingsToDo(todos))
// deleteTodo(todos,'Feed the cats')
// console.log(todos)