////// funct1 //////
function findMaximum(array) {

    var max = array[0]; 
    for (var i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

///// funct2 //////
function findMinimum(array) {
    var min = array[0]; 
    for (var i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }

///// funct3 /////

function sumArray(array){
    var sum = 0;
for (i = 0; i <array.length; i++) {
  sum += array[i];
}
    return sum
}  
