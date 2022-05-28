package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.User;
import com.pbl5.bookstore.repository.UserRepository;
import com.pbl5.bookstore.service.FileUploadUtil;
import com.pbl5.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @Override
    public User updateAvatar(long userId, MultipartFile multipartFile) throws IOException {
        User user = findUserById(userId);
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        user.setAvatar("http://localhost:8080/image/avatar/" + user.getId() +"/" + fileName);
        String uploadDir = "src/main/resources/static/image/avatar/" + user.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        User result = saveUser(user);
        return result;
    }

    @Override
    public User updateUser(long id, User user) {
        User userUpdate = userRepo.findUserByAccount_Id(id).orElseThrow(()->
                new ResourceNotFoundException("User is not exits with account id " + id));
        userUpdate.setUserName(user.getUserName());
        userUpdate.setFirstName(user.getFirstName());
        userUpdate.setLastName(user.getLastName());
        userUpdate.setAddress(user.getAddress());
        userUpdate.setPhoneNumber(user.getPhoneNumber());
        User result = saveUser(userUpdate);
        return result;
    }


}
