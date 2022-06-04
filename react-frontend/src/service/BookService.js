import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080"
var config = {
    headers: {
        authorization: ' JWT fefege...' ,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }   
};
class BookService{
    getAllBookAdmin(){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/books' );
    }
    
    getBookbyIdAdmin(idBook){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/books/' + idBook )
    }

    getAllAuthor(){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/authors');
    }

    getAllPublisher(){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/publishers');
    }

    getAuthorbyId(id){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/authors/' + id )
    }

    getAllUser(){
        return axios.get(BOOK_API_BASE_URL+ '/user')
    }

    getUserById(idUser){
        return axios.get(BOOK_API_BASE_URL + '/user?id=' + idUser)
    }

    getAllGenre(){
        return axios.get(BOOK_API_BASE_URL+ '/admin/api/v1/genres')
    }
    
    getDashboard(){
        return axios.get(BOOK_API_BASE_URL + "/admin/api/v1/dashboard" );
    }

    postNewAuthor(author){
        return axios.post(BOOK_API_BASE_URL + '/admin/api/v1/authors', author,  config)
    }

    putUpdateAuthor(id){
        return axios.put(BOOK_API_BASE_URL + '/admin/api/v1/authors' + id);
    }

    deleteAuthorById(id){
        return axios.delete(BOOK_API_BASE_URL+ '/admin/api/v1/authors/' + id);
    }
}

export default new BookService();