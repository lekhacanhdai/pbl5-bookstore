package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.repository.AcountRepository;
import com.pbl5.bookstore.service.AcountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcountServiceImpl implements AcountService {

    @Autowired
    private AcountRepository acountRepository;

    public AcountServiceImpl(AcountRepository acountRepository) {
        this.acountRepository = acountRepository;
    }

    @Override
    public List<Account> getAllAccount() {
        return acountRepository.findAll();
    }

    @Override
    public Account saveAccount(Account account) {
        return acountRepository.save(account);
    }

    @Override
    public Account findAccountById(long id) {
        return acountRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Account not exist by id " + id));
    }

    @Override
    public void deleteAccount(long id) {
        acountRepository.delete(findAccountById(id));
    }
}
