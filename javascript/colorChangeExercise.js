var button = document.getElementsByClassName("button")[0];
//var isClicked = false;
//
//button.addEventListener("click", function() {
//   if (isClicked) {
//       document.body.style.backgroundColor = "white";
//    } else {
//        document.body.style.backgroundColor = "purple";
//    }
//    
//    isClicked = !isClicked;
//});

button.addEventListener("click", function() {
    document.body.classList.toggle("toggle");
});