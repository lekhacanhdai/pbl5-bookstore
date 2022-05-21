package com.pbl5.bookstore.filter.repository;

import antlr.Token;
import com.pbl5.bookstore.model.ActiveAccountToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface ActiveTokenRepository extends JpaRepository<ActiveAccountToken, Long> {
    Optional<ActiveAccountToken> findByToken(String token);

    @Transactional
    @Modifying
    @Query("UPDATE ActiveAccountToken a " +
        "SET a.confirmAt = ?2 "+
        "WHERE a.token = ?1")
    int updateConfirmAt(String token, LocalDateTime confirmAt);
}
