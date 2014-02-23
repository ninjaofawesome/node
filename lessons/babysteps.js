var test = process.argv.slice(2);
var sum = 0;

test.forEach(function(val, index, array){
	sum += +val;	
});

console.log(sum);

