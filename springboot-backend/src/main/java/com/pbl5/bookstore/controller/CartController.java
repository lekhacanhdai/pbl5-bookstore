package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/carts")
    public ResponseEntity<Cart> addNewCart(@RequestBody Cart cart){
        return ResponseEntity.ok(cartService.saveCart(cart));
    }
}
