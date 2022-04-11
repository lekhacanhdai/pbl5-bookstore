package com.pbl5.bookstore.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "discounts")
public class Discount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String title;

    @Column
    private int value;

    public Discount(String title, int value) {
        this.title = title;
        this.value = value;
    }

    @OneToMany(mappedBy = "discount", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

}
