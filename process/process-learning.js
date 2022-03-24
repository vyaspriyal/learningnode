const path = require("path");
const x = __filename;
console.log(path.basename(x));



console.log(process.pid);//return id
console.log(process.versions.node);//return version of node

console.log(process.argv)// return array of args passed

//const [,,firstName,LastName] = process.argv;
//console.log(firstName,LastName);


// node app.js --greeting "welcome"  --user "priyal"
const grab = flag =>{
    let index = process.argv.indexOf(flag)+1;
return process.argv[index]
}

const greeting = grab("--greeting")
const user = grab("--user")
console.log(greeting +"  "+  user)
//welcome  priyal
