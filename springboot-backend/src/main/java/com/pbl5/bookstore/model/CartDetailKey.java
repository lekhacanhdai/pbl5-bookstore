package com.pbl5.bookstore.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@EqualsAndHashCode
@Setter
@Embeddable
public class CartDetailKey implements Serializable {
    @Column(name = "book_id")
    private Long bookId;

    @Column(name = "cart_id")
    private Long cartId;

}
