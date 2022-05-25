package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Account;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AccountAdminService {
    List<Account> getAllAccount();

    Account saveNewAccount(Account account);

    Account updateAccount(Account account);

    Account findAccountById(long id);

    void deleteAccount(long id);

    int enableAccount(String email);

    Account findAccountByEmail(String email);
}
