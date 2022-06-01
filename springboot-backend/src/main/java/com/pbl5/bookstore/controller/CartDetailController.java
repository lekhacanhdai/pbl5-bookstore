package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;
import com.pbl5.bookstore.service.CartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
public class CartDetailController {

    @Autowired
    private CartDetailService cartDetailService;

    @GetMapping("/cart-details")
    public ResponseEntity<CartDetail> getCartDetailById(@RequestBody CartDetailKey cartDetailKey){
        return ResponseEntity.ok(cartDetailService.getCartDetailById(cartDetailKey));
    }

    @PutMapping("/cart-details/increase-quantity")
    public ResponseEntity<CartDetail> increaseQuantity(@RequestBody CartDetailKey cartDetailKey){
        return ResponseEntity.ok(cartDetailService.increaseQuantity(cartDetailKey));
    }

    @PutMapping("/cart-details/decrease-quantity")
    public ResponseEntity<CartDetail> decreaseQuantity(@RequestBody CartDetailKey cartDetailKey){
        return ResponseEntity.ok(cartDetailService.decreaseQuantity(cartDetailKey));
    }

    @DeleteMapping("/cart-details")
    public ResponseEntity<Map<String, Boolean>> deleteCartDetail(@RequestBody CartDetailKey cartDetailKey){
        Map<String, Boolean > response = new HashMap<>();
        cartDetailService.deleteCartDetailById(cartDetailKey);
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
