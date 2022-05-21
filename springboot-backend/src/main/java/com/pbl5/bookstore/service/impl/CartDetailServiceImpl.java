package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.filter.repository.CartDetailRepository;
import com.pbl5.bookstore.service.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartDetailServiceImpl implements CartDetailService {

    @Autowired
    private CartDetailRepository cartDetailRepository;
    @Override
    public CartDetail saveCartDetail(CartDetail cartDetail) {
        return cartDetailRepository.save(cartDetail);
    }
}
