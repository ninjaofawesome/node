var fs = require('fs'); 
var thing = process.argv[2];
var hello = fs.readFileSync(thing);	
//hello = "<Buffer 53 74 61 6e 64 73 20 6f 75 74 20 6c 69 6b 65 20 61 20 6d 65 74 68 6f 20 6e 6f 20 77 6f 72 72 69 65 73 20 61 73 20 64 72 79 20 61 73 20 61 20 62 61 72 62 ...>"
var string = hello.toString().split('\n').length-1;



console.log(string);





