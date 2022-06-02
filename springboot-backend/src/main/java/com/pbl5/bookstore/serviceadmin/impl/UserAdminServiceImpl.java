package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.repository.UserRepository;
import com.pbl5.bookstore.serviceadmin.UserAdminService;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserAdminServiceImpl implements UserAdminService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public int getUserNumber() {
        return userRepository.getUserNumber();
    }
    
}
