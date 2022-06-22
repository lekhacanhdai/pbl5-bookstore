import axios from "axios";
import authHeader from "./AuthHeader";

const BOOK_API_BASE_URL = "http://localhost:8080";

const ADMIN_BOOK_API_BASE_URL = "http://localhost:8080/admin/api/v1";

class BookService {
  getAllBook() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/books", authHeader());
  }

  getBookbyId(idBook) {
    return axios.get(
      ADMIN_BOOK_API_BASE_URL + "/books/" + idBook, authHeader());
  }

  // getBookbyGenre(genre){
  //   return axios.get(ADMIN_BOOK_API_BASE_URL + "/books/" + genre, authHeader());
  // }

  getAllAuthor() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/authors", authHeader());
  }

  getAllPublisher() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/publishers", authHeader());
  }

  getAuthorbyId(id) {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/authors/" + id, authHeader());
  }

  getPublisherbyId(id) {
    return axios.get(
      ADMIN_BOOK_API_BASE_URL + "/publishers/" + id,
      authHeader()
    );
  }

  getAllUser() {
    return axios.get(BOOK_API_BASE_URL + "/user", authHeader());
  }

  getUserById(idUser) {
    return axios.get(BOOK_API_BASE_URL + "/user?id=" + idUser, authHeader());
  }

  getAllGenre() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/genres", authHeader());
  }

  getDashboard() {
    return axios.get(ADMIN_BOOK_API_BASE_URL + "/dashboard", authHeader());
  }

  postNewBook(book) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + "/books/", book, authHeader());
  }

  postNewGenre(genre) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + "/genres", genre, authHeader());
  }

  postNewAuthor(author) {
    return axios.post(
      ADMIN_BOOK_API_BASE_URL + "/authors",
      author,
      authHeader()
    );
  }

  postNewPublisher(publisher) {
    return axios.post(
      ADMIN_BOOK_API_BASE_URL + "/publishers",
      publisher,
      authHeader()
    );
  }

  postNewUser(user) {
    return axios.post(ADMIN_BOOK_API_BASE_URL + "/users" + user, authHeader());
  }

  putAuthorById(id, author) {
    return axios.put(
      ADMIN_BOOK_API_BASE_URL + "/authors/" + id,
      author,
      authHeader()
    );
  }

  putPublisherById(id, publisher) {
    return axios.put(
      ADMIN_BOOK_API_BASE_URL + "/publishers/" + id,
      publisher,
      authHeader()
    );
  }

  putGenreById(id, genre) {
    return axios.put(
      ADMIN_BOOK_API_BASE_URL + "/genres/" + id,
      genre,
      authHeader()
    );
  }

  putBookById(id, book) {
    return axios.put(
      ADMIN_BOOK_API_BASE_URL + "/books/" + id,
      book,
      authHeader()
    );
  }

  deleteBookById(id) {
    return axios.delete(ADMIN_BOOK_API_BASE_URL + "/books/" + id, authHeader());
  }

  deleteAuthorById(id) {
    return axios.delete(
      ADMIN_BOOK_API_BASE_URL + "/authors/" + id,
      authHeader()
    );
  }

  deletePublisherById(id) {
    return axios.delete(
      ADMIN_BOOK_API_BASE_URL + "/publishers/" + id,
      authHeader()
    );
  }

  deleteGenreById(id) {
    return axios.delete(
      ADMIN_BOOK_API_BASE_URL + "/genres/" + id,
      authHeader()
    );
  }
}

export default new BookService();
