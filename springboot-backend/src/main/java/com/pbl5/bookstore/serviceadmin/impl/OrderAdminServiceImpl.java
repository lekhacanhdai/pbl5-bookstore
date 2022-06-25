package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.dto.ChartData;
import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;
import com.pbl5.bookstore.repository.OrderRepository;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public List<OrderData> getLimit5Order() {
        Pageable topFive = PageRequest.of(0, 5);
        return orderRepository.getLimitOrder(topFive);
    }

    @Override
    public List<ChartData> getChartData(Boolean status, String year) {
        return orderRepository.getChartData(status, year);
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
