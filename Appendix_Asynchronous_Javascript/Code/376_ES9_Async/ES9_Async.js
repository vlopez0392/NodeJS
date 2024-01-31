//Two new ES2018 features 
const urls = [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
    'https://swapi.dev/api/people/3/',
    'https://swapi.dev/api/people/4/',
]

//Finally - Useful if you want to execute a piece of code regardless of the outcome
Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array =>{
        throw Error
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
    })
    .catch(err => console.log('Error caught, fixing... ', err))
    .finally(()=> console.log('extra')); //Will be called regardless if the promise resolves or rejects

//For await... of