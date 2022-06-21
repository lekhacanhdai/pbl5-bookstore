package com.pbl5.bookstore.service;

import java.util.List;

import com.pbl5.bookstore.model.Order;

public interface OrderService {
    List<Order> findOrderByUserId(long userId);

    Order saveOrder(Order order);

    Order saveOrderPay(Order order, long userId);

    Order getOderById(long orderId);
}
