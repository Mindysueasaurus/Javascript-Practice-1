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

// const findNote = function(notes, noteTitle){
//   const index = notes.findIndex(function(note, index) {
//     return note.title === noteTitle
//   })
// }
//  const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index){
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
//  }
// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index){
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//  }
// console.log(notes.length)
// const findNotes = function (notes, query){
//     return filteredNotes = notes.filter(function(note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
//   })
// }


// console.log(findNotes(notes, 'to'))

// const note = findNote(notes, 'ton Practice a new Language')
// console.log(note)

// const index = notes.findIndex(function(note, index){
//   console.log(note)
//   return note.title === 'Habits to work on'
// })

// console.log(index)

const sortNotes = function(notes) {
  notes.sort(function(a, b){
    if(a.title.toLowerCase() < b.title.toLowerCase()){
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()){
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes)
console.log(notes)