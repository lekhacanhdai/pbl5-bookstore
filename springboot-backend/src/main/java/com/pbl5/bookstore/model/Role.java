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
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name_role")
    private String name;

    @Column
    private String slug;

    @Column
    private String description;

    @ManyToMany(mappedBy = "roles")
    private List<Acount> acounts = new ArrayList<>();

    public Role(String name, String slug, String description) {
        this.name = name;
        this.slug = slug;
        this.description = description;
    }

    public Role(String name) {
        this.name = name;
    }
}
