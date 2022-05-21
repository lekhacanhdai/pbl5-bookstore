package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.dto.AddBookDTO;
import com.pbl5.bookstore.model.Book;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;
import com.pbl5.bookstore.service.BookService;
import com.pbl5.bookstore.service.CartDetailService;
import com.pbl5.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private CartDetailService cartDetailService;

    @Autowired
    private BookService bookService;

    @PostMapping("/carts")
    public ResponseEntity<Cart> addNewCart(@RequestBody Cart cart){
        return ResponseEntity.ok(cartService.saveCart(cart));
    }

    @PostMapping("/books/add-to-cart/{id}")
    public ResponseEntity<Cart> addBookToCart(@PathVariable long id, @RequestBody AddBookDTO addBookDTO){
        Book book = bookService.findBookById(id);
        Cart cart = cartService.findCartById(addBookDTO.getCartId());
        CartDetail cartDetail = new CartDetail();
        CartDetailKey cartDetailKey = new CartDetailKey(id, addBookDTO.getCartId());
        cartDetail.setId(cartDetailKey);
        cartDetail.setCart(cart);
        cartDetail.setBook(book);
        cartDetail.setQuantity(addBookDTO.getQuantity());
        CartDetail savedCartDetail = cartDetailService.saveCartDetail(cartDetail);
        cart.getCartDetails().add(savedCartDetail);
        cartService.saveCart(cart);

        return ResponseEntity.ok(cart);
    }

    @GetMapping("/carts/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable long id){
        long cartId = cartService.getCartIdByAccountId(id);
        return ResponseEntity.ok(cartService.findCartById(cartId));
    }

}
