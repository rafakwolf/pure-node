const fs = require('fs')

const files = fs.readdirSync(__dirname)

console.log(files) 

//OR

files.forEach(f => console.log(f))