let isAccountLocked = false
let userRole = 'admin'

// if (isAccountLocked) {
//   console.log("is account locked")
// } else {
//   console.log( 'Welcome' )
// }

if (isAccountLocked ) {
  console.log("is account locked")
} else if (userRole === 'admin') { 
  console.log("Welcome Admin")
} else {
  console.log('Welcome')
}



//it is freezing outside
//it is hot coutside
//go for it. it is pretty nice

let temp = 45


if (temp <= 32) {
  console.log('It is freezing outside!')
} else if (temp >= 110) {
  console.log("it is way to hot outside")
} else {
  console.log('Go for it. It is pretty nice')
}


