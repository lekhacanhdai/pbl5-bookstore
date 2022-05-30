import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080"

class BookService{
    getAllBookAdmin(){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/books' );
    }
    
    getBookbyIdAdmin(idBook){
        return axios.get(BOOK_API_BASE_URL + '/admin/api/v1/books/' + idBook )
    }

    getAllAuthor(){
        return axios.get(BOOK_API_BASE_URL + '/authors')
    }

    getAuthorbyId(idAuthor){
        return axios.get(BOOK_API_BASE_URL + '/idAuthor/{' + idAuthor  + '}')
    }

    getAllUser(){
        return axios.get(BOOK_API_BASE_URL+ '/user')
    }

    getUserById(idUser){
        return axios.get(BOOK_API_BASE_URL + '/user?id=' + idUser)
    }

}

export default new BookService();