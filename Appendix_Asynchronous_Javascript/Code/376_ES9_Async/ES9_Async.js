//Two new ES2018 features 
let urls = [
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
urls = ['https://jsonplaceholder.typicode.com/users',
              'https://jsonplaceholder.typicode.com/posts',
              'https://jsonplaceholder.typicode.com/albums'
];

//We saw this in the previous video
const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users ', users);
        console.log('posts ', posts);
        console.log('albums ', albums);
    }catch(err){
        console.log(err, 'An error occurred');
    }
}

//For.. of syntax - Allows us to loop through an iterable 
const loopThrough = url => {
    for (url of urls)
        console.log(url);
}
 
//Let's rewrite getData() as follows 
const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url))
    for await(let request of arrayOfPromises){
        const data = await request.json()
        console.log(data);
    }
}

getData2();