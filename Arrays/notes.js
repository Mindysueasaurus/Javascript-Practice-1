const notes = [{
  title: 'Note 1',
  body: 'I would like to go to Spain'
},{
  title: 'Habits to work on',
  body: 'Eating better'
},{
  title: 'Practice a new language',
  body: 'Java looks nice'
}]

// console.log(notes.pop())
// notes.push('New note')

// console.log(notes.shift())
// console.log(notes.unshift('my first note'))

//.splice(1, 1, 'This the new item')
//notes[2] = 'This is now the new note 3'

// notes.forEach(function(item, index) {
//   console.log(index)
//   console.log(item)
// })
// 

// for(let count = 0; count <= 2; count++){
// console.log(count)
// }
// for (let count = notes.length - 1; count >= 0; count--){
//   console.log(notes[count])
// } 

const findNote = function(notes, noteTitle){
  const index = notes.findIndex(function(note, index) {
    return note.title === noteTitle
  })
}


console.log(notes.length)

console.log(notes)

const index = notes.findIndex(function(note, index){
  console.log(note)
  return note.title === 'Habits to work on'
})

console.log(index)