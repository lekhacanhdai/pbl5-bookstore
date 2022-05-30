package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.filter.repository.AccountRepository;
import com.pbl5.bookstore.serviceadmin.AccountAdminService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class AccountAdminServiceImpl implements AccountAdminService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> getAllAccount() {
        return accountRepository.findAll();
    }

    @Override
    public Account saveNewAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account findAccountById(long id) {
        return accountRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Account not exist by id " + id));
    }

    @Override
    public void deleteAccount(long id) {

    }

    @Override
    public int enableAccount(String email) {
        return 0;
    }

    @Override
    public Account findAccountByEmail(String email) {
        return null;
    }
}
