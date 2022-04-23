package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Role;

import java.util.List;

public interface RoleService {
    Role findRoleByName(String name_role);

    List<Role> getAllRoles();

}
