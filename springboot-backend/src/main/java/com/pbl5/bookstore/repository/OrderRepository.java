package com.pbl5.bookstore.repository;

import java.util.List;

import com.pbl5.bookstore.dto.ChartData;
import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;
import com.pbl5.bookstore.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {


    List<Order> findOrderByUser_Id(long id);

    @Query(value = "SELECT COUNT(*) FROM lpaypcdi_pbl5_bookstore.orders",
            nativeQuery = true)
    int getOrderNumber();

    @Query(value = "SELECT \n    SUM(books.price * orders_details.quantity) AS total\nFROM\n    lpaypcdi_pbl5_bookstore.orders AS orders,\n    lpaypcdi_pbl5_bookstore.orders_details AS orders_details,\n    lpaypcdi_pbl5_bookstore.books AS books\nWHERE\n    orders.id = orders_details.order_id\n        AND orders_details.book_id = books.id;",
            nativeQuery = true)
    int getRevenueTotal();

    @Query("select distinct new com.pbl5.bookstore.dto.OrderData(o.id,u.userName,o.dateOrder,SUM(b.price * od.quantity),o.paymentStatus) from User u INNER JOIN u.orders o INNER JOIN o.orderDetails od INNER JOIN od.book b group by o.id order by o.dateOrder DESC ")
    List<OrderData> getAllOrder();

    @Query("select distinct new com.pbl5.bookstore.dto.OrderDetailData(b.title,b.price,od.quantity,SUM(b.price*od.quantity)) from Order o inner join o.orderDetails od inner join od.book b where o.id= ?1 group by od.id,o.user.id,o.discount,o.dateOrder")
    List<OrderDetailData> getOrderDetailById(long id);

    @Query("select distinct new com.pbl5.bookstore.dto.OrderData(o.id,u.userName,o.dateOrder,SUM(b.price * od.quantity),o.paymentStatus) from User u INNER JOIN u.orders o INNER JOIN o.orderDetails od INNER JOIN od.book b group by o.id order by o.dateOrder DESC ")
    List<OrderData> getLimitOrder(Pageable pageable);

    @Query("select distinct new com.pbl5.bookstore.dto.ChartData(substring(o.dateOrder,1,4),substring(o.dateOrder,6,2),sum(b.price*od.quantity)) from User u INNER JOIN  u.orders o INNER JOIN o.orderDetails od INNER JOIN od.book b where o.paymentStatus=?1 group by substring(o.dateOrder,1,4),substring(o.dateOrder,6,2) order by o.dateOrder desc ")
    List<ChartData> getChartData(Boolean status);
}
