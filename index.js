const axios = require('axios');

//list of urls 
const urls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/posts/59",
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts/178",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/users/987",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/todos/967",
    "https://jsonplaceholder.typicode.com/comments/732",
    "https://jsonplaceholder.typicode.com/photos",
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/photos/800"
];

//declared two seperate arrays for active and inactive Links.
let activeLinks = [];
let inactiveLinks = [];

//defined findActiveAndInactiveLink method.
const findActiveAndInactiveLink = () => {

    //maps each object of urls array.
    const result = urls.map(
        async (currentUrl) => {
            try {

                //http get method for currentUrl
                await axios.get(currentUrl)
                //if error not found meand http request was successful. so current url is active url. 
                //url is pushed activeLinks in array.
                activeLinks.push(currentUrl)

            } catch (error) {

                //if caught error ,means http request was not successful. so current url is inactive url. 
                //url is pushed inactiveLinks in array.
                inactiveLinks.push(currentUrl)
            }
        }
    )

    //this all method of promise makes sure that all promises are resolved first and after that then block implements.
    Promise.all(result).then(
        (_) => {
            //prints active links.
            console.log("activeLinks: ")
            activeLinks.map(
                obj => console.log(obj)
            )
            //prints inactive links.
            console.log("inactiveLinks: ")
            inactiveLinks.map(
                obj => console.log(obj)
            )
        }
    )
}

// findActiveAndInactiveLink method called here.
findActiveAndInactiveLink()
