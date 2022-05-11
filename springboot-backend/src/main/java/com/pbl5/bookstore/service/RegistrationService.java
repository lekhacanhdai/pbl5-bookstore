package com.pbl5.bookstore.service;

import com.pbl5.bookstore.dto.RegistrationDTO;

public interface RegistrationService {
    public String register(RegistrationDTO registrationDTO);
    public String confirmToken(String token);
}
