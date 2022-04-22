package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Role;
import com.pbl5.bookstore.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/roles")
    private ResponseEntity<List<Role>> getAllRoles(){
        return ResponseEntity.ok(roleService.getAllRoles());
    }
}
