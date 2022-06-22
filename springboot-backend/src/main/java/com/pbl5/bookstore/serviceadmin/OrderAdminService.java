package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;

import java.util.List;

public interface OrderAdminService {
    int getOrderNumber();
    int getRevenueTotal();
    List<OrderData> getAllOrder();
    List<OrderDetailData> getOrderDetailById(long id);
}
