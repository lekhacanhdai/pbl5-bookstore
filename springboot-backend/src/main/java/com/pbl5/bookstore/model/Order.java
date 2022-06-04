package com.pbl5.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetail> orderDetails = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "discount_id")
    private Discount discount;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "date_order")
    private Date dateOrder;

    @Column(name = "payment_status", columnDefinition = "boolean default false")
    private boolean paymentStatus;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    public Order(Date dateOrder) {
        this.dateOrder = dateOrder;
    }

    public int getTotalBill(){
        int result = 0;
        for (OrderDetail orderDetail: orderDetails){
            result += orderDetail.getBook().getPrice() * orderDetail.getQuantity();
        }
        if (discount != null){
            result *= discount.getValue() / 100;
        }

        return result;
    }

    public double getTotalBillUSD(){
        return getTotalBill() / 20000.0;
    }
}
