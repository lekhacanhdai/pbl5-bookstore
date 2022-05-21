import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1"

class BookService{
    getAllBook(){
        return axios.get(BOOK_API_BASE_URL + '/books' );
    }
    
    getBookbyId(idBook){
        return axios.get(BOOK_API_BASE_URL + '/books?id=' + idBook )
    }

    getPublisherbyId(idPublisher){
        return axios.get(BOOK_API_BASE_URL + '/publishers=' + idPublisher )
    }

    getAllUser(){
        return axios.get(BOOK_API_BASE_URL+ '/user')
    }

    getUserById(idUser){
        return axios.get(BOOK_API_BASE_URL + '/user?id=' + idUser)
    }

}

export default new BookService();