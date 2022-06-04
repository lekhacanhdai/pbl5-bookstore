package com.pbl5.bookstore.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class AddBookDTO {
    private Long bookId;
    private Long accountId;
    private int quantity;
}
