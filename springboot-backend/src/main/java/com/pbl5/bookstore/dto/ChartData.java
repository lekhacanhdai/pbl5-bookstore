package com.pbl5.bookstore.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class ChartData {
    private String month;
    private long revenueTotal;
}
