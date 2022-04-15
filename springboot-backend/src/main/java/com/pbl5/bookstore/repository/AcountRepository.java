package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcountRepository extends JpaRepository<Account, Long> {
}
