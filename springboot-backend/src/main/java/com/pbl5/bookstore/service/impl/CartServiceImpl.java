package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.repository.CartRepository;
import com.pbl5.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;


    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart findCartById(long id) {
        return cartRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Book not exist with id" + id));
    }
}
