package com.pbl5.bookstore.controller;


import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.service.AcountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class AccountController {
    @Autowired
    private AcountService acountService;

    // get all account
    @GetMapping("/accounts")
    private ResponseEntity<List<Account>> getAllAccount(){
        return ResponseEntity.ok(acountService.getAllAccount());
    }

    @PostMapping("/accounts")
    private ResponseEntity<Account> addNewAccount(@RequestBody Account account){
        account.getCart().setAccount(account);
        account.getUser().setAccount(account);
        return ResponseEntity.ok(acountService.saveAccount(account));
    }

    @PutMapping("/accounts/{id}")
    private ResponseEntity<Account> updateAccount(@PathVariable long id, @RequestBody Account account){
        Account account1 = acountService.findAccountById(id);
        account1.setEmail(account.getEmail());
        account1.setPassword(account.getPassword());
        Account updateAccount = acountService.saveAccount(account1);
        return ResponseEntity.ok(updateAccount);
    }

    @GetMapping("/account/{id}")
    private ResponseEntity<Account> getAccountById(@PathVariable long id){
        return ResponseEntity.ok(acountService.findAccountById(id));
    }

}
