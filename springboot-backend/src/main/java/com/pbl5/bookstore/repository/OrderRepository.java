package com.pbl5.bookstore.repository;

import java.util.List;

import com.pbl5.bookstore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findOrderByUser_Id(long id);
}
