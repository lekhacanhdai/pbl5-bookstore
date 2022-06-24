package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.dto.ChartData;
import com.pbl5.bookstore.dto.DashBoardData;
import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.serviceadmin.BookAdminService;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;
import com.pbl5.bookstore.serviceadmin.UserAdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1/")
public class DashboardAdminController {
    @Autowired
    private BookAdminService bookAdminService;
    @Autowired
    private OrderAdminService orderAdminService;
    @Autowired 
    private UserAdminService userAdminService;

    @GetMapping("/dashboard")
    private ResponseEntity<DashBoardData> getDashboardData(){
        DashBoardData dashBoardData = new DashBoardData();
        dashBoardData.setBookNumber(bookAdminService.getBookNumber());
        dashBoardData.setOrderNumber(orderAdminService.getOrderNumber());
        dashBoardData.setRevenueTotal(orderAdminService.getRevenueTotal());
        dashBoardData.setUserNumber(userAdminService.getUserNumber());

        return ResponseEntity.ok(dashBoardData);
    }

    @GetMapping("/dashboard-order")
    private ResponseEntity<List<OrderData>> getOrderLimit5(){
        return ResponseEntity.ok(orderAdminService.getLimit5Order());
    }

    @GetMapping("dashboard-chart")
    private ResponseEntity<List<ChartData>> getChartData(){
        return ResponseEntity.ok(orderAdminService.getChartData(true, "2022"));
    }
}
