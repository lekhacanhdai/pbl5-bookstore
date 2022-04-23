package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.User;
import com.pbl5.bookstore.repository.UserRepository;
import com.pbl5.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    public UserServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User findUserById(long id) {
        return userRepo.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User not exist by id " + id)
        );
    }

    @Override
    public void deleteUser(long id) {
        userRepo.delete(findUserById(id));
    }
}
