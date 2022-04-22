package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUser();

    User saveUser(User user);

    User findUserById(long id);

    void deleteUser(long id);
}
