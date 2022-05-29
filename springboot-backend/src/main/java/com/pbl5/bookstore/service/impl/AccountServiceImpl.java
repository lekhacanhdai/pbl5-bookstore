package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.repository.AccountRepository;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.model.ActiveAccountToken;
import com.pbl5.bookstore.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AccountServiceImpl implements AccountService{

    @Autowired
    private AccountRepository accountRepository;
    private ActiveTokenServiceImpl activeTokenService;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException("User not found in database"));
        return new User(account.getEmail(), account.getPassword(), account.getAuthorities());
    }

    @Override
    public List<Account> getAllAccount() {
        return accountRepository.findAll();
    }


    @Override
    public String saveNewAccount(Account account) {
        boolean accountExits = accountRepository.findByEmail(account.getEmail()).isPresent();
        if (accountExits){
            throw new IllegalStateException("Email is aready taken");
        }
        account.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
        accountRepository.save(account);
        String token = UUID.randomUUID().toString();
        ActiveAccountToken activeAccountToken = new ActiveAccountToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                account
        );

        activeTokenService.saveActiveToken(activeAccountToken);
        return token;

    }

    @Override
    public Account updateAccount(Account account) {
        account.setPassword(bCryptPasswordEncoder.encode(account.getPassword()));
        return accountRepository.save(account);
    }

    @Override
    public Account findAccountById(long id) {
        return accountRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Account not exist by id " + id));
    }

    @Override
    public void deleteAccount(long id) {
        accountRepository.delete(findAccountById(id));
    }

    @Override
    public int enableAccount(String email) {
        return accountRepository.enableAccount(email);
    }

    @Override
    public Account findAccountByEmail(String email) {
        return accountRepository.findByEmail(email).orElseThrow(() ->
                new ResourceNotFoundException("Account not exist by email " + email));
    }
}
