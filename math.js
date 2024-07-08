/////// func1 //////
function factorial(number){
    if (number === 0 || number===1) { 
            return 1 
        } 
     return number * factorial( number - 1 ) 
    }

////// func2 /////
function primer(number){

    for (var i = 2; i <= Math.sqrt(number); i++) {
   if (number % i === 0) {

     return false;
   }
 }
 return true;
}


////// func3 ////
function FibonacciSequence(){
    var number = parseInt(prompt('Enter the number of terms: '));
var n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (var i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}