package com.pbl5.bookstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "accounts", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Account {
    @Id
    @Column(name = "user_id")
    private long id;

    @Column
    private String email;

    @Column
    private String password;

    @JsonIgnore
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(name = "role_account", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles = new ArrayList<>();

    public Account(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
