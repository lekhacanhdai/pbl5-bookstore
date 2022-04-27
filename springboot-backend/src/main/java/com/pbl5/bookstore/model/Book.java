package com.pbl5.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column(name = "publication_date")
    private Date publiccationDate;

    @Column
    private int edition;

    @Column(name = "available_quantity")
    private int availableQuantity;

    @Column
    private int price;

    @Column
    private int weight;

    @Column
    private String size;

    @Column
    private int pages;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column
    private String image;

    @ManyToOne
    @JoinColumn(name = "publisher_id", nullable = false)
    private Publisher publisher;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genre;

    @JsonIgnore
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<CartDetail> cartDetails = new ArrayList<CartDetail>();

    @JsonIgnore
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<OrderDetail> orderDetails = new ArrayList<>();

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    public Book(String title, Date publiccationDate, int edition, int availableQuantity,
                int price, int weight, String size, int pages, String description, String image) {
        this.publiccationDate = publiccationDate;
        this.edition = edition;
        this.title = title;
        this.availableQuantity = availableQuantity;
        this.price = price;
        this.weight = weight;
        this.size = size;
        this.pages = pages;
        this.description = description;
        this.image = image;
    }

}
