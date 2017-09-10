function isEven(num) {
    return num % 2 === 0? true:false;
}

function factorialOf(num) {
    if (typeof num === "string") {
        return "Not a number";
    }
    
    if (num === 0) {
        return 1;
    } else {
        var factorial = 1;
        for (var i = num; i > 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

function kebabToSnake(str) {
    if (typeof str === "number") {
        return "This is not a String";
    }
    var newString = str.replace(/-/g, "_");
    
    return newString;
}