import Author from '../entities/Author';
const url = 'https://jsonplaceholder.typicode.com';

class Users {
    fetchUsers() {
        return fetch(`${url}/users`)
            .then(response => {
                let myJSON = response.json();
                return myJSON;
            }) 
            .then(response => {
                return response.map(eachUser => {
                    return new Author(eachUser)
                })
            })
        }
}

export const users = new Users;