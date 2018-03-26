import SinglePostsPost from '../entities/SinglePostsPost'

const url = 'https://jsonplaceholder.typicode.com';

class SinglePostService {
    fetchPostsPos(id) {
        return fetch(`${url}/posts/${id}`)
            .then(response => {
                let myJSON = response.json();
                return myJSON;
            })
            .then(response => {
                return response.map(eachPostsPost => {
                    return new SinglePostsPost(eachPostsPost)
                })
            })
    }
}

export const singlePostService = new SinglePostService;