package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.dto.OrderData;
import com.pbl5.bookstore.dto.OrderDetailData;
import com.pbl5.bookstore.serviceadmin.OrderAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1/")
public class OrderAdminController {
    @Autowired
    private OrderAdminService orderAdminService;

    @GetMapping("/orders")
    private ResponseEntity<List<OrderData>> getAllOrder(){
        return ResponseEntity.ok(orderAdminService.getAllOrder());
    }

    @GetMapping("/orders/{id}")
    private ResponseEntity<List<OrderDetailData>> getOrderDetailById(@PathVariable long id){
        return ResponseEntity.ok(orderAdminService.getOrderDetailById(id));
    }

}
