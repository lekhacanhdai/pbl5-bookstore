package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.dto.RequestNewAccountDTO;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.service.RoleService;
import com.pbl5.bookstore.serviceadmin.AccountAdminService;
import com.pbl5.bookstore.serviceadmin.RegistrationAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/v1")
public class AccountAdminController {

    @Autowired
    private AccountAdminService accountAdminService;

    @Autowired
    private RegistrationAdminService registrationAdminService;


    private RoleService roleService;

    @GetMapping("/accounts")
    private ResponseEntity<List<Account>> getAllAccounts(){
        return ResponseEntity.ok(accountAdminService.getAllAccount());
    }

    @PostMapping("/accounts")
    private ResponseEntity<Account> addNewAccount(@RequestBody RequestNewAccountDTO requestNewAccountDTO){
        return ResponseEntity.ok(registrationAdminService.register(requestNewAccountDTO));
    }

//    @PutMapping("/accounts/{id}")
//    private ResponseEntity<Account> updateAccount(@PathVariable long id,@RequestBody RequestNewAccountDTO requestNewAccountDTO){
//        Account accountUpdate = accountAdminService.findAccountById(id);
//
//    }

}
