import Post from '../entities/Post';
const url = 'https://jsonplaceholder.typicode.com';

class Posts {
    fetchPosts() {
        return fetch(`${url}/posts`)
            .then(response => {
                let myJSON = response.json();
                return myJSON;
            })
            .then(response => {
                return response.map(eachPost => {
                    return new Post(eachPost)
                })
            })
        }
}

export const posts = new Posts;