let restaurant = {
  name: "BJ'S",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailablity: function(partySize) {
   let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function(partySize) {
     this.guestCount += partySize
  },
  removeParty: function(partySize) {
     this.guestCount -= partySize
  }

}

//seatParty
//removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailablity(6))
restaurant.removeParty(10)
console.log(restaurant.checkAvailablity(6))


