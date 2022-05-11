package com.pbl5.bookstore.service;

public interface EmailService {
    void send(String to, String message);

    boolean emailValidator(String email);
}
