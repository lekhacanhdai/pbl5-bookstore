package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.OrderDetail;
import com.pbl5.bookstore.model.OrderDetailKey;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailKey> {
}
