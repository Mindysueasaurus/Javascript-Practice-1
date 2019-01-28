// let temp = 65

// //60-90 nice out

// if ( temp >= 60 && temp <= 90 ) {
//   console.log("it is nice outside")
// }

//challenge
//reservation system 
let isGuestOneVegan = false
let isGuestTwoVegan = false

//are both vegan - only offer vegan dishes

//at least one is vegan - offer both- make sure to ffer up some vegan options
//none are vegan- offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('make sure to offer up some vegan options')
} else {
  console.log('Offer up anything on the menu')
}
