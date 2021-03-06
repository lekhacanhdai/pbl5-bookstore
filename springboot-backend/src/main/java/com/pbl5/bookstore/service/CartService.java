package com.pbl5.bookstore.service;

import com.pbl5.bookstore.dto.AddBookDTO;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.Order;

import java.util.Optional;

public interface CartService {
    public Cart saveCart(Cart cart);
    Cart findCartById(long id);

    long getCartIdByAccountId(long id);

    Optional<Cart> addBookToCart(long bookId, AddBookDTO addBookDTO);

    Order getPaymentInfo(long accountId);

    void deleteAllCartDetail(Cart cart);
}
