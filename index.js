'use strict'

let events = require('./eventemitter.js');
const handlePickup = require('./src/driver.js')
const { createPackage, handleDelivered, } = require('./src/vendor.js')
const handleGlobal = require('./src/global.js')

events.on('pickup', handlePickup);
events.on('global', handleGlobal);
events.on('delivered', handleDelivered);
createPackage('The Store');

