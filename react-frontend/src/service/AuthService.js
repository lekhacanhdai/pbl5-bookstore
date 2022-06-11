import axios from 'axios';
const API_URL = 'http://localhost:8080/api/v1/';

class AuthService {
  async login(email, password) {
    const response = await axios.post(API_URL + 'login', null, {
      params: { email: email, password: password },
    });
    if (response.data.access_token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }
  async register(email, password) {
    const response = await axios.post(API_URL + 'registration', {
      email: email,
      password: password,
    });
    return response.data;
  }
  logout() {
    localStorage.removeItem('user');
  }
  // async register(email, password) {
  //   return await axios.post(API_URL + 'registration', null, {
  //     params: { email: email, password: password },
  //   });
  // }
}

export default new AuthService();
