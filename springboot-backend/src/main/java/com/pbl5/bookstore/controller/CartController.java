package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.dto.AddBookDTO;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.Order;
import com.pbl5.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/carts")
    public ResponseEntity<Cart> addNewCart(@RequestBody Cart cart){
        return ResponseEntity.ok(cartService.saveCart(cart));
    }

    @PostMapping("/books/add-to-cart/{id}")
    public ResponseEntity<?> addBookToCart(@PathVariable long id, @RequestBody AddBookDTO addBookDTO){
        Optional<Cart> cart = cartService.addBookToCart(id, addBookDTO);

        return ResponseEntity.ok(cart);
    }

    @GetMapping("/carts/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable long id){
        long cartId = cartService.getCartIdByAccountId(id);
        return ResponseEntity.ok(cartService.findCartById(cartId));
    }

    @GetMapping("/carts/payment/{id}")
    public ResponseEntity<Order> getPaymentInfo(@PathVariable long id){
        Order order = cartService.getPaymentInfo(id);
        return ResponseEntity.ok(order);
    }
}
