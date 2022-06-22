package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;
import com.pbl5.bookstore.repository.OrderRepository;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderAdminServiceImpl implements OrderAdminService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<OrderData> getAllOrder() {
        return orderRepository.getAllOrder();
    }

    @Override
    public List<OrderDetailData> getOrderDetailById(long id) {
        return orderRepository.getOrderDetailById(id);
    }

    @Override
    public int getOrderNumber() {
        return orderRepository.getOrderNumber();
    }

    @Override
    public int getRevenueTotal() {
        return orderRepository.getRevenueTotal();
    }
    
}
