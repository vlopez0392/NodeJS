//Synchronous - Code executes line by line in order - Predictable output
console.log("Rabbit finished");
console.log("Turtle finished");

//Asynchronous - Very powerful concept 
setTimeout(() => {
    console.log("Rabbit finished");
}, 1000);

console.log("Turtle finished");




