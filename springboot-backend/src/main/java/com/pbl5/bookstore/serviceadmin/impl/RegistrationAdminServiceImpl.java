package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.dto.RequestNewAccountDTO;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.model.Cart;
import com.pbl5.bookstore.model.Role;
import com.pbl5.bookstore.model.User;
import com.pbl5.bookstore.service.CartService;
import com.pbl5.bookstore.service.RoleService;
import com.pbl5.bookstore.service.UserService;
import com.pbl5.bookstore.serviceadmin.AccountAdminService;
import com.pbl5.bookstore.serviceadmin.RegistrationAdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class RegistrationAdminServiceImpl implements RegistrationAdminService {
    private final AccountAdminService accountAdminService;
    private final UserService userService;
    private final RoleService roleService;
    private final CartService cartService;

    @Override
    public Account register(RequestNewAccountDTO requestNewAccountDTO) {
        List<Role> roles = new ArrayList<>();
        roles.add(roleService.findRoleByName(requestNewAccountDTO.getRoleName()));
        User user = new User();
        user.setUserName(requestNewAccountDTO.getUserName());
        user.setFirstName(requestNewAccountDTO.getFirstName());
        user.setLastName(requestNewAccountDTO.getLastName());
        user.setAddress(requestNewAccountDTO.getAddress());
        user.setPhoneNumber(requestNewAccountDTO.getPhoneNumber());

        Cart cart = new Cart();

        Account account = new Account(
                requestNewAccountDTO.getEmail(),
                requestNewAccountDTO.getPassword(),
                user,
                cart,
                roles
        );
        account.setEnable(Boolean.TRUE);
        accountAdminService.saveNewAccount(account);

        user.setAccount(account);
        cart.setAccount(account);
        userService.saveUser(user);
        cartService.saveCart(cart);

        return account;
    }
}
