package com.pbl5.bookstore.repository;

import java.util.List;

import com.pbl5.bookstore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findOrderByUser_Id(long id);

    @Query(value = "SELECT COUNT(*) FROM lpaypcdi_pbl5_bookstore.orders",
            nativeQuery = true)
    int getOrderNumber();

    @Query(value = "SELECT \n    SUM(books.price * orders_details.quantity) AS total\nFROM\n    lpaypcdi_pbl5_bookstore.orders AS orders,\n    lpaypcdi_pbl5_bookstore.orders_details AS orders_details,\n    lpaypcdi_pbl5_bookstore.books AS books\nWHERE\n    orders.id = orders_details.order_id\n        AND orders_details.book_id = books.id;",
            nativeQuery = true)
    int getRevenueTotal();

}
