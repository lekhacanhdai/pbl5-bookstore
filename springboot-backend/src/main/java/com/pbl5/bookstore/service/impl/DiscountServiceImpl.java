package com.pbl5.bookstore.service.impl;

import java.util.List;

import com.pbl5.bookstore.model.Discount;
import com.pbl5.bookstore.repository.DiscountRepository;
import com.pbl5.bookstore.service.DiscountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiscountServiceImpl implements DiscountService {

    @Autowired
    private DiscountRepository discountRepository;

    @Override
    public List<Discount> getAlDiscounts() {
        // TODO Auto-generated method stub
        List<Discount> discounts = discountRepository.findAll();
        return discounts;
    }
}
