import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080"

const ADMIN_BOOK_API_BASE_URL = "http://localhost:8080/admin/api/v1"
var config = {
    headers: {
        authorization: ' JWT fefege...' ,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }   
};
class BookService{
    getAllBookAdmin(){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/books' );
    }
    
    getBookbyIdAdmin(idBook){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/books/' + idBook )
    }

    getAllAuthor(){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/authors');
    }

    getAllPublisher(){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/publishers');
    }

    getAuthorbyId(id){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/authors/' + id )
    }

    getPublisherbyId(id){
        return axios.get(ADMIN_BOOK_API_BASE_URL + '/publishers/' + id)
    }

    getAllUser(){
        return axios.get(BOOK_API_BASE_URL+ '/user')
    }

    getUserById(idUser){
        return axios.get(BOOK_API_BASE_URL + '/user?id=' + idUser)
    }

    getAllGenre(){
        return axios.get(ADMIN_BOOK_API_BASE_URL+ '/genres')
    }
    
    getDashboard(){
        return axios.get(ADMIN_BOOK_API_BASE_URL + "/dashboard" );
    }

    postNewAuthor(author){
        return axios.post(ADMIN_BOOK_API_BASE_URL + '/authors', author);
    }

    postNewPublisher(publisher){
        return axios.post(ADMIN_BOOK_API_BASE_URL + '/publishers', publisher);
    }

    putAuthorById(id, author){
        return axios.put(ADMIN_BOOK_API_BASE_URL + '/authors/' + id, author);
    }

    putPublisherById(id, publisher){
        return axios.put(ADMIN_BOOK_API_BASE_URL+ '/publishers/' + id, publisher);
    }

    deleteAuthorById(id){
        return axios.delete(ADMIN_BOOK_API_BASE_URL+ '/authors/' + id);
    }

    deletePublisherById(id){
        return axios.delete(ADMIN_BOOK_API_BASE_URL + '/publishers/' + id);
    }
}

export default new BookService();