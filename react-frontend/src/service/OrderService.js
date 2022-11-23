import axios from 'axios';
import authHeader from './AuthHeader';

const BASE_URL = 'http://vndat00.cf:8080/api/v1/';

class OrderService {
  getPaymentInfo(userId) {
    return axios.get(BASE_URL + 'carts/payment/' + userId, {
      headers: authHeader(),
    });
  }
  getAllDiscountCode() {
    return axios.get(BASE_URL + 'discounts', { headers: authHeader() });
  }
  payment(orderInfo, userId) {
    return axios.post(BASE_URL + `orders/${userId}?paypal=false`, orderInfo, {
      headers: authHeader(),
    });
  }
  paymentOnline(orderInfo, userId) {
    return axios.post(BASE_URL + `orders/${userId}?paypal=true`, orderInfo, {
      headers: authHeader(),
    });
  }
}

export default new OrderService();
