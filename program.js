// get the file system
var fs = require("fs");

// read the passed parameter, fire function once it's read
fs.readFile(process.argv[2], function finishedReading(error, userFile) {
    
    // throw an error if there is on
    if (error) return console.error(error)
    
    // count the number of lines in the specified file
    var numberOfLines = userFile.toString().split("\n").length - 1;

    // return the number of specified lines
    console.log(numberOfLines);
})
