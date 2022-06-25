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
    return axios.post(API_URL + 'registration', {
      email: email,
      password: password,
    });
  }
  async resetPassword(email) {
    return axios.put(API_URL + 'accounts/reset-password', null, {
      params: { email: email },
    });
  }
  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
