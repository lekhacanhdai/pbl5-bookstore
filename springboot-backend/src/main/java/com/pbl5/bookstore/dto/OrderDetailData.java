package com.pbl5.bookstore.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class OrderDetailData {
    private String title;
    private int price;
    private long quantity;
    private long amount;
}
