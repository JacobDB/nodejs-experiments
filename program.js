// get the file system
var fs = require("fs");

// get the path
var path = require("path");

// get the first argument
var dir = process.argv[2];

// get the second argument
var ext = process.argv[3];

// read the passed parameter, fire function once it's read
fs.readdir(dir, function finishedReading(error, list) {
    
    // throw an error if there is on
    if (error) return console.error(error)
    
    // loop through the list array
    for (var i = 0; i < list.length; i++) {
        
        // set the current list item as the current file
        var file = list[i];
        
        // if the path matches the specified extension, print the file name
        if (path.extname(file) === "." + ext) {
            console.log(file);
        }
    }
})
