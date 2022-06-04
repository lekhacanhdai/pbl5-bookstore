package com.pbl5.bookstore.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Order;
import com.pbl5.bookstore.model.OrderDetail;
import com.pbl5.bookstore.model.OrderDetailKey;
import com.pbl5.bookstore.model.User;
import com.pbl5.bookstore.repository.OrderDetailRepository;
import com.pbl5.bookstore.repository.OrderRepository;
import com.pbl5.bookstore.repository.UserRepository;
import com.pbl5.bookstore.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderSeviceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;


    @Override
    public List<Order> findOrderByUserId(long userId) {
        List<Order> orders = new ArrayList<>();
        boolean checkUser = userRepository.findById(userId).isPresent();
        if (checkUser){
            orders = orderRepository.findOrderByUser_Id(userId);
        }
        else throw new ResourceNotFoundException("User not exist with id " + userId);
        return orders;
    }


    @Override
    public Order saveOrder(Order order) {
        Order result = orderRepository.save(order);
        return result;
    }


    @Override
    public Order saveOrderPay(Order order, long userId) {
        User user = userRepository.findUserByAccount_Id(userId).orElseThrow((() ->
            new ResourceNotFoundException("User not exits with id " + userId)));
        Order orderSave = new Order();
        orderSave.setUser(user);
        orderSave.setDeliveryAddress(order.getDeliveryAddress());
        orderSave.setDiscount(order.getDiscount());
        orderSave.setDateOrder(new Date());
        orderSave.setPaymentStatus(false);
        Order orderSave1 = saveOrder(orderSave);
        Order savedOrder = new Order();
        for (OrderDetail orderDetail: order.getOrderDetails()){
            OrderDetail orderDetailSaved = new OrderDetail();
            orderDetailSaved.setBook(orderDetail.getBook());
            orderDetailSaved.setQuantity(orderDetail.getQuantity());
            orderDetailSaved.setOrder(orderSave1);
            OrderDetailKey orderDetailKey = new OrderDetailKey();
            orderDetailKey.setBookId(orderDetail.getBook().getId());
            orderDetailKey.setOrderId(orderSave1.getId());
            orderDetailSaved.setId(orderDetailKey);
            orderDetailRepository.save(orderDetailSaved);
            orderSave1.getOrderDetails().add(orderDetailSaved);
            savedOrder = saveOrder(orderSave1);
        }
        
        return savedOrder;
    }


    @Override
    public Order getOderById(long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow(() ->
            new ResourceNotFoundException("Order not exist with id " + orderId));
        return order;
    }
}
