package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {
    List<User> getAllUser();

    User saveUser(User user);

    User findUserById(long id);

    void deleteUser(long id);

    User updateAvatar(long userId, MultipartFile multipartFile) throws IOException;

    User updateUser(long id, User user);
}
