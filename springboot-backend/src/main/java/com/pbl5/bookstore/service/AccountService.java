package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Account;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface AccountService extends UserDetailsService {
    List<Account> getAllAccount();

    String saveNewAccount(Account account);

    Account updateAccount(Account account);

    Account findAccountById(long id);

    void deleteAccount(long id);

    int enableAccount(String email);

    Account findAccountByEmail(String email);
}
