package com.pbl5.bookstore.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class OrderData {
    private long orderId;
    private String username;
    private Date dateOrder;
    private long amount;
    private Boolean paymentStatus;
}
