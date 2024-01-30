const promise = new Promise((resolve,reject) => {
    if(true){
        resolve('Stuff Worked');
    }else{
        reject('Error, it broke')
    }
})

//Promise chaining
promise.then(result => result + '!')
       .then(result2 => {
            console.log(result2);
       });

//Error handling 
promise.then(result => result + '!')
       .then(result2 => {
        throw Error
            console.log(result2);
       })
       .catch(() => console.log('Error')); //Catches any possible errors in the promise chain 

//Promise.all - Returns an array of promises
const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'Hello');
});

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'World');
});

const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 5000, 'Whay are you waiting for?');
});

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    });

//Catch only runs if there are any Errors Thrown before it is called. 
//Uncaught error in the following code snippet
promise.then(result =>  result + '!')
       .then(result2 => result2 + '?')
       .catch(() => console.log('Error'))
       .then(result3 => {
            throw Error
            console.log(result3 + '!')
       });
