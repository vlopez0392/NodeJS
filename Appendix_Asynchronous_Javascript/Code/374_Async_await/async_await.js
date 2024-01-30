async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data)
}
fetchUsers();

const urls = ['https://jsonplaceholder.typicode.com/users',
              'https://jsonplaceholder.typicode.com/posts',
              'https://jsonplaceholder.typicode.com/albums'
];

//Using async await to grab some json data 
Promise.all(urls.map(url => {
    return fetch(url)
            .then(resp => resp.json())
})).then(results =>{
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});

const getData = async function(){
    try{
        //ES6 desctructuring
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