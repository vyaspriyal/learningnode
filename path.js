const path = require('path')
console.log(path.sep)

const filepath = path.join('./global.txt')
console.log(filepath)
const base = path.basename(filepath)
console.log(base)

const abspath = path.resolve(filepath)
console.log(abspath)