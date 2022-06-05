package com.pbl5.bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class DashBoardData {
    private int userNumber;
    private int orderNumber;
    private long revenueTotal;
    private int bookNumber;
}
