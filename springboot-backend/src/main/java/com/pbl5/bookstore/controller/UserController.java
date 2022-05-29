package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.User;
import com.pbl5.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api/v1/")
public class UserController {
    @Autowired
    private UserService userService;
    @PutMapping("/users/avatar/{id}")
    public ResponseEntity<User> updateAvatarUser(@PathVariable long id, @RequestParam("avatar")MultipartFile multipartFile) throws IOException {
        User user = userService.updateAvatar(id, multipartFile);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user){
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

}
