package com.pbl5.bookstore.controller;

import java.util.List;

import com.pbl5.bookstore.model.Discount;
import com.pbl5.bookstore.service.DiscountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/")
public class DiscountController {
    
    @Autowired
    private DiscountService discountService;
    
    @GetMapping("/discounts")
    public ResponseEntity<List<Discount>> getAllDiscount(){
        return ResponseEntity.ok(discountService.getAlDiscounts());
    }
}
