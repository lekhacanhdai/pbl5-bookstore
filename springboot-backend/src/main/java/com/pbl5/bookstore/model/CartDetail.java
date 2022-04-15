package com.pbl5.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "cart_details")
public class CartDetail {
    @EmbeddedId
    private CartDetailKey id;

    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @JsonIgnore
    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @Column
    private int quantity;

    public CartDetail(int quantity) {
        this.quantity = quantity;
    }
}
