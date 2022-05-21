package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.model.Role;
import com.pbl5.bookstore.filter.repository.RoleRepository;
import com.pbl5.bookstore.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role findRoleByName(String name_role) {
        return roleRepository.findRoleByName(name_role);
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
}
