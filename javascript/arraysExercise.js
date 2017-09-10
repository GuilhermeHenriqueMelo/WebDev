var decision;
var vetorReverso = [1, 2, 3, 4, 5, 6];
var vetorUniforme = ["a", "a", "b", "a"];
var vetorSum = [1, 2, 3, 5];
var vetorMax = [-5, -88, 89, 111, 32, 56, 82];

function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}


function isUniform(array) {
    var element = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== element) {
            return false;
        }
    }
    return true;
}


function sumArray(array) {
    sum += array;
}


function max(array) {
    if (maxNumber < array) {
        maxNumber = array;
    }
}

do {
    decision = parseInt(prompt("What do you want to do?"), 10);
    
    if (decision === 1) {
        printReverse(vetorReverso);
    } else if (decision === 2) {
        if (isUniform(vetorUniforme)) {
            console.log("The array is Uniform");
        } else {
            console.log("The array is not Uniform");
        }
    } else if (decision === 3) {
        var sum = 0;
        vetorSum.forEach(sumArray, sum);
        console.log(sum);
    } else if (decision === 4) {
        var maxNumber = 0;
        vetorMax.forEach(max, maxNumber);
        console.log(maxNumber);
    }
} while (decision !== 5);
