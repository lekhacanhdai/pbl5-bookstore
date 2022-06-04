package com.pbl5.bookstore.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.Order;
import com.pbl5.bookstore.service.CartService;
import com.pbl5.bookstore.service.OrderService;
import com.pbl5.bookstore.service.PaypalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
@RequestMapping("api/v1/")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @Autowired
    private PaypalService paypalService;

    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id){
        return ResponseEntity.ok(orderService.getOderById(id));
    }

    @GetMapping("/orders/user/{id}")
    public ResponseEntity<List<Order>> getOrderByUserId(@PathVariable long id){

        return ResponseEntity.ok(orderService.findOrderByUserId(id));
    }

    @PostMapping(value="/orders/{id}")
    public ResponseEntity<Map<String, String>> createOrder(@RequestBody Order order, @PathVariable long id, 
        @RequestParam("paypal") String paypal) throws PayPalRESTException {
        Order orderResponse = orderService.saveOrderPay(order, id);


        Cart cart = cartService.findCartById(id);
        cartService.deleteAllCartDetail(cart);
        cart.getCartDetails().clear();
        cartService.saveCart(cart);

        if (paypal.equals("true")){
            Payment payment = paypalService.createPayment(order.getTotalBillUSD(), "Thanh toan paypal", 
            "http://localhost:8080/api/v1/orders/cancel-payment", 
            "http://localhost:8080/api/v1/orders/success-payment/" + orderResponse.getId());
            for (Links link: payment.getLinks()){
                if (link.getRel().equals("approval_url")){
                    Map<String, String> redirectLinks = new HashMap<>();
                    redirectLinks.put("redirectLinks", link.getHref());
                    return ResponseEntity.status(HttpStatus.CREATED).body(redirectLinks);
                }
            }
        }


        Map<String, String> response = new HashMap<>();
        response.put("Order created", "True");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/orders/cancel-payment")
    public String cancelPay(){
        return "cancel";
    }

    @GetMapping("/orders/success-payment/{id}")
    public ResponseEntity<String> successPay(@PathVariable long id, @RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId){
        Order order = orderService.getOderById(id);
        try{
            Payment payment = paypalService.executePayment(paymentId, payerId);
            System.out.println(payment.toJSON());
            if (payment.getState().equals("approved")){
                order.setPaymentStatus(true);
                orderService.saveOrder(order);
                return ResponseEntity.ok("success");
            }
        }
        catch (PayPalRESTException e){
            System.out.println(e.getMessage());
        }
        return ResponseEntity.ok("error");
    }
    
}
