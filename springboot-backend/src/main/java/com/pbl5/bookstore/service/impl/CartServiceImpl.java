package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.dto.AddBookDTO;
import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Book;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;
import com.pbl5.bookstore.model.Order;
import com.pbl5.bookstore.model.OrderDetail;
import com.pbl5.bookstore.repository.CartRepository;
import com.pbl5.bookstore.service.BookService;
import com.pbl5.bookstore.service.CartDetailService;
import com.pbl5.bookstore.service.CartService;
import com.pbl5.bookstore.service.UserService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private BookService bookService;

    @Autowired
    private CartDetailService cartDetailService;
    
    @Autowired
    private UserService userService;

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart findCartById(long id) {
        return cartRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Book not exist with id " + id));
    }

    @Override
    public long getCartIdByAccountId(long id) {
        if (cartRepository.getIdByAccountId(id).size() == 0){
            throw new ResourceNotFoundException("Account not exist with id " + id);
        }
        return cartRepository.getIdByAccountId(id).get(0);
    }

    @Override
    public Optional<Cart> addBookToCart(long bookId, AddBookDTO addBookDTO) {
        Book book = bookService.findBookById(bookId);
        Cart cart = findCartById(getCartIdByAccountId(addBookDTO.getAccountId()));
        boolean bookHadInCart = cart.getCartDetails().stream().anyMatch(cartDetail -> cartDetail.getBook().getId() == bookId);
        if (bookHadInCart){
            CartDetail cartDetail1 = cart.getCartDetails().stream()
                    .filter(cartDetail ->
                            cartDetail.getBook().getId() == bookId)
                    .collect(Collectors.toList())
                    .get(0);
            cartDetail1.setQuantity(cartDetail1.getQuantity() + addBookDTO.getQuantity());
            cartDetailService.saveCartDetail(cartDetail1);
            return Optional.of(cart);
        }
        else {
            CartDetail cartDetail = new CartDetail();
            CartDetailKey cartDetailKey = new CartDetailKey(bookId, getCartIdByAccountId(addBookDTO.getAccountId()));
            cartDetail.setId(cartDetailKey);
            cartDetail.setCart(cart);
            cartDetail.setBook(book);
            cartDetail.setQuantity(addBookDTO.getQuantity());
            CartDetail savedCartDetail = cartDetailService.saveCartDetail(cartDetail);
            cart.getCartDetails().add(savedCartDetail);
            saveCart(cart);
            return Optional.of(cart);
        }
    }

    @Override
    public Order getPaymentInfo(long accountId) {
        Cart cart = findCartById(accountId);
        Order order = new Order();
        
        for (CartDetail cartDetail: cart.getCartDetails()){
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setBook(cartDetail.getBook());
            orderDetail.setQuantity(cartDetail.getQuantity());
            order.getOrderDetails().add(orderDetail);
        }
        order.setDeliveryAddress(userService.findUserById(accountId).getAddress());
        return order;
    }

    @Override
    public void deleteAllCartDetail(Cart cart) {
        cart.getCartDetails().forEach(c -> 
            cartDetailService.deleteCartDetailById(c.getId()));
    }
}
