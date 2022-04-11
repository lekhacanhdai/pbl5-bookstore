package com.pbl5.bookstore.model;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Embeddable
public class OrderDetailKey implements Serializable {
    @Column(name = "book_id")
    private long bookId;

    @Column(name = "order_id")
    private long orderId;
}
