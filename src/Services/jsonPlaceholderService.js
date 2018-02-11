export default function getJsonPlaceholder(number) {

    const url = "https://jsonplaceholder.typicode.com/posts";

    return fetch(url + '/' + number) 
 
}