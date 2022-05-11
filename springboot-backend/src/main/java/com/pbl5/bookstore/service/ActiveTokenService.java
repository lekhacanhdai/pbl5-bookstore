package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.ActiveAccountToken;

import java.util.Optional;

public interface ActiveTokenService {
    void saveActiveToken(ActiveAccountToken token);
    Optional<ActiveAccountToken> getToken(String token);

    int setActiveAt(String token);
}
