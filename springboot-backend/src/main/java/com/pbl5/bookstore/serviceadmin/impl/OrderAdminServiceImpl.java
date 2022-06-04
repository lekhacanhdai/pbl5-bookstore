package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.repository.OrderRepository;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OrderAdminServiceImpl implements OrderAdminService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public int getOrderNumber() {
        return orderRepository.getOrderNumber();
    }

    @Override
    public int getRevenueTotal() {
        return orderRepository.getRevenueTotal();
    }
    
}
