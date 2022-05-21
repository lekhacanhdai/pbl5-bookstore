package com.pbl5.bookstore.dto;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@EqualsAndHashCode
@ToString
public class RequestNewAccountDTO {
    private String email;
    private String password;
    private String userName;
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;
    private String roleName; // ROLE_USER or ROLE_ADMIN
}
