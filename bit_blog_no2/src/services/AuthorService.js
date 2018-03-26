import SingleAuthorsPosts from '../entities/SingleAuthorsPosts';
const url = 'https://jsonplaceholder.typicode.com';

class AuthorService {
    fetchAuthorsPosts(id) {
        return fetch(`${url}/posts?userId=${id}`)
            .then(response => {
                let myJSON = response.json();
                return myJSON;
            })
            .then(response => {
                return response.map(eachAuthorsPosts => {
                    return new SingleAuthorsPosts(eachAuthorsPosts);
                })
            })
        }
}

export const authorService = new AuthorService;