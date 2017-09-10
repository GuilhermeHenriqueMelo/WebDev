var todos = ["Buy new Turtle"];

input = getUserDecision();
//var input = prompt("What would you like to do?");

while (input !== "quit") {
    setAnswer(input);

    input = getUserDecision();
}
console.log("OK, YOU QUIT THE APP");


function setAnswer(answer) {
    if (answer === "list") {
        todos.forEach(function(todo, i) {
            console.log("**********");
            console.log(i + ": " + todo);
        }); 
        console.log("**********");
    } else if (answer === "new") {
        var newTodo = prompt("Enter new Todo");
        todos.push(newTodo);
        console.log("Added Todo");
    } else if (answer === "delete") {
        var index = prompt("Enter the index of todo to delete");
        todos.splice(index, 1);
        console.log("Delete Todo");
    }
}

function getUserDecision() {
    return prompt("What would you like to do?");
}