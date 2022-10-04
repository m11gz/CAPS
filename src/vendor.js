'use strict'

let events = require('../eventemitter.js');

function createPackage (storeName) {
let payload = {
  "store": storeName,
  "orderId": '32rgmio3e9vlkn',
  'customer': 'gigaChad',
  'address': "1234 Chad Blvd" 
}
events.emit('global', {event:'pickup', payload: payload});
events.emit('pickup', payload);

}
function handleDelivered (payload){
  console.log(`Thank You, ${payload.customer}`)
}


module.exports = {
  createPackage,
  handleDelivered
}

