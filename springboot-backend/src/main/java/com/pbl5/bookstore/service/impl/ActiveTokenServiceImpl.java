package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.model.ActiveAccountToken;
import com.pbl5.bookstore.repository.ActiveTokenRepository;
import com.pbl5.bookstore.service.ActiveTokenService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ActiveTokenServiceImpl implements ActiveTokenService {
    private final ActiveTokenRepository activeTokenRepository;

    @Override
    public void saveActiveToken(ActiveAccountToken token){
        activeTokenRepository.save(token);
    }

    @Override
    public Optional<ActiveAccountToken> getToken(String token){
        return activeTokenRepository.findByToken(token);
    }

    @Override
    public int setActiveAt(String token) {
        return activeTokenRepository.updateConfirmAt(token, LocalDateTime.now());
    }
}
