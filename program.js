// get the file system
var fs = require("fs");

// get the specified file
var file = fs.readFileSync(process.argv[2]).toString();

var numberOfLines = file.split("\n").length - 1;

console.log(numberOfLines);
