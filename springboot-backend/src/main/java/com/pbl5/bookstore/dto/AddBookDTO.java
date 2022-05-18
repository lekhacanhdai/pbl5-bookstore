package com.pbl5.bookstore.dto;

import com.pbl5.bookstore.model.Book;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class AddBookDTO {
    private Long bookId;
    private Long cartId;
    private int quantity;
}
