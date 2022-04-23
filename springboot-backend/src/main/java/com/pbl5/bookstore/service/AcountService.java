package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Account;

import java.util.List;

public interface AcountService {
    List<Account> getAllAccount();

    Account saveAccount(Account account);

    Account findAccountById(long id);

    void deleteAccount(long id);
}
