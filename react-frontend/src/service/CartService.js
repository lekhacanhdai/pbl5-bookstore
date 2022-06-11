import axios from 'axios';
import authHeader from './AuthHeader';

const BASE_URL = 'http://localhost:8080/api/v1/';

class CartService {
  addtoCart(userId, bookId, quantity) {
    return axios.post(
      BASE_URL + 'books/add-to-cart/' + bookId,
      {
        accountId: userId,
        bookId: bookId,
        quantity: quantity,
      },
      { headers: authHeader() }
    );
  }

  getCartByUserId(userId) {
    return axios.get(BASE_URL + 'carts/' + userId, { headers: authHeader() });
  }

  increaseQuantity(cartId, bookId) {
    return axios.put(
      BASE_URL + 'cart-details/increase-quantity',
      {
        cartId: cartId,
        bookId: bookId,
      },
      { headers: authHeader() }
    );
  }

  decreaseQuantity(cartId, bookId) {
    return axios.put(
      BASE_URL + 'cart-details/decrease-quantity',
      {
        cartId: cartId,
        bookId: bookId,
      },
      { headers: authHeader() }
    );
  }

  deleteCart(cartId, bookId) {
    return axios.delete(BASE_URL + 'cart-details', {
      headers: authHeader(),
      data: { cartId: cartId, bookId: bookId },
    });
  }
}

export default new CartService();
