import axios from 'axios';

const BOOK_API_BASE_URL = 'http://vndat00.cf:8080/api/v1';

class GenresService {
  getAllGenres() {
    return axios.get(BOOK_API_BASE_URL + '/genres');
  }
}

export default new GenresService();
