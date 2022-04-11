package com.pbl5.bookstore.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String review;

    @Column
    private String reply;

    @Column(name = "date_review")
    private Date dateReview;

    @Column(name = "date_reply")
    private Date dateReply;

    @Column
    private int rate;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Review(String review, String reply, Date dateReview, Date dateReply, int rate) {
        this.review = review;
        this.reply = reply;
        this.dateReview = dateReview;
        this.dateReply = dateReply;
        this.rate = rate;
    }
}
