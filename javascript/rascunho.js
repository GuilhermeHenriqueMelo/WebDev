var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

numbers.forEach(function (num) {
    sum += num;
});
console.log(sum);

//for (var i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 3 === 0) {
//        console.log(numbers[i]);
//    }
//}


function createObject(name, number, something) {
    var obj = {
        name: name,
        number: number,
        something: something
    };
    
    return obj;
}



for (var i = 0; i < links.length; i++) {
    links[i].style.border = "1px dashed purple";
    links[i].style.color = "orange";
}

document.querySelector("ul").addEventListener("hover", function() {
    console.log("You hovered the UL!");
});


var lis = document.querySelectorAll("li");
var isClicked = false;
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
        if (isClicked) {
            this.style.color = "pink";
            isClicked = false;
        } else {
            this.style.color = "blue";
            isClicked = true;
        }
    });
}