package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;
import com.pbl5.bookstore.repository.CartDetailRepository;
import com.pbl5.bookstore.service.CartDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CartDetailServiceImpl implements CartDetailService {

    @Autowired
    private CartDetailRepository cartDetailRepository;
    @Override
    public CartDetail saveCartDetail(CartDetail cartDetail) {
        return cartDetailRepository.save(cartDetail);
    }

    @Override
    public CartDetail getCartDetailById(CartDetailKey cartDetailKey) {
        return cartDetailRepository.getCartDetailById(cartDetailKey).orElseThrow(() ->
                new ResourceNotFoundException("Cart detail not exist"));
    }

    @Override
    public CartDetail increaseQuantity(CartDetailKey cartDetailKey) {
        CartDetail cartDetail = getCartDetailById(cartDetailKey);
        cartDetail.setQuantity(cartDetail.getQuantity() + 1);
        cartDetailRepository.save(cartDetail);
        return cartDetail;
    }

    @Override
    public CartDetail decreaseQuantity(CartDetailKey cartDetailKey) {
        CartDetail cartDetail = getCartDetailById(cartDetailKey);
        if (cartDetail.getQuantity() > 1){
            cartDetail.setQuantity(cartDetail.getQuantity() - 1);
            cartDetailRepository.save(cartDetail);
        }
        return cartDetail;
    }

    @Override
    public void deleteCartDetailById(CartDetailKey cartDetailKey) {
        CartDetail cartDetail = getCartDetailById(cartDetailKey);
        cartDetailRepository.deleteCartDetailByKey(cartDetail.getId().getBookId(), cartDetail.getId().getCartId());
    }
}
