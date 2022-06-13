package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;

public interface CartDetailService {
    CartDetail saveCartDetail(CartDetail cartDetail);
    CartDetail getCartDetailById(CartDetailKey cartDetailKey);

    CartDetail increaseQuantity(CartDetailKey cartDetailKey);

    CartDetail decreaseQuantity(CartDetailKey cartDetailKey);

    void deleteCartDetailById(CartDetailKey cartDetailKey);
}
