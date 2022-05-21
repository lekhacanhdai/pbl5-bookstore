package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Cart;

public interface CartService {
    public Cart saveCart(Cart cart);
    Cart findCartById(long id);
}
