//commmonjs - every file in node is module
//modules - encapuslate code (only share minimum)



const names = require('./firstmodule')
const sayHi = require('./util')
//console.log(names)
const val1  = require('./alternative')
//console.log(val1.items)

require('./7-mind')
// sayHi("ganpati ")
// sayHi(names.john)
// sayHi(names.peter)

