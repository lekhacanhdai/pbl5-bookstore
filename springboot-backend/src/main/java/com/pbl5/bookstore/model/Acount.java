package com.pbl5.bookstore.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "acounts", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Acount {
    @Id
    @Column(name = "user_id")
    private long id;

    @Column
    private String email;

    @Column
    private String password;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(name = "role_acount", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles = new ArrayList<>();

    public Acount(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
