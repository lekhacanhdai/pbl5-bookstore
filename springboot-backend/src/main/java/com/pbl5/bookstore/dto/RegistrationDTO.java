package com.pbl5.bookstore.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationDTO {
    private final String email;
    private final String password;
}
