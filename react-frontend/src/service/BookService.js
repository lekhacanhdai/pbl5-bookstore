import axios from 'axios';

const BOOK_API_BASE_URL = 'http://localhost:8080';

const BASE_URL = 'http://localhost:8080/api/v1';

const ADMIN_BOOK_API_BASE_URL = 'http://localhost:8080/admin/api/v1';
var config = {
  headers: {
    authorization: ' JWT fefege...',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
class BookService {
  getAllBook() {
    return axios.get(BASE_URL + '/books');
  }

  getBookbyId(idBook) {
    return axios.get(BASE_URL + '/books/' + idBook);
  }

  getBooksbyGenresId(genresId) {
    return axios.get(BASE_URL + '/books/genres/' + genresId);
  }
  getAllBookAdmin() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/books');
  }

  getBookbyIdAdmin(idBook) {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/books/' + idBook);
  }

  getAllAuthor() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/authors');
  }

  getAllPublisher() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/publishers');
  }

  getAuthorbyId(id) {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/authors/' + id);
  }

  getPublisherbyId(id) {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/publishers/' + id);
  }

  getAllUser() {
    return axios.get(BOOK_API_BASE_URL + '/user');
  }

  getUserById(idUser) {
    return axios.get(BOOK_API_BASE_URL + '/user?id=' + idUser);
  }

  getAllGenre() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/genres');
  }

  getDashboard() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/dashboard');
  }

  getChar(){
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/dashboard-chart')
  }

  getDashboardOrder(){
    return axios.get(ADMIN_BOOK_API_BASE_URL + '/dashboard-order')
  }

  postNewBook(content){
    return axios.post(ADMIN_BOOK_API_BASE_URL + '/books', content)
  }

  postNewImg(id, mul){
    return axios.post(ADMIN_BOOK_API_BASE_URL + '/books/img/' + id, mul)
  }

  postNewGenre(genre) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + '/genres', genre);
  }

  postNewAuthor(author) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + '/authors', author);
  }

  postNewPublisher(publisher) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + '/publishers', publisher);
  }

  putAuthorById(id, author) {
    return axios.put(ADMIN_BOOK_API_BASE_URL + '/authors/' + id, author);
  }

  putPublisherById(id, publisher) {
    return axios.put(ADMIN_BOOK_API_BASE_URL + '/publishers/' + id, publisher);
  }

  putGenreById(id, genre) {
    return axios.put(ADMIN_BOOK_API_BASE_URL + '/genres/' + id, genre);
  }

  deleteAuthorById(id) {
    return axios.delete(ADMIN_BOOK_API_BASE_URL + '/authors/' + id);
  }

  deletePublisherById(id) {
    return axios.delete(ADMIN_BOOK_API_BASE_URL + '/publishers/' + id);
  }

  deleteGenreById(id) {
    return axios.delete(ADMIN_BOOK_API_BASE_URL + '/genres/' + id);
  }
}

export default new BookService();
