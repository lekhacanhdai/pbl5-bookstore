package com.pbl5.bookstore.controller;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pbl5.bookstore.dto.RegistrationDTO;
import com.pbl5.bookstore.model.Account;
import com.pbl5.bookstore.service.AccountService;
import com.pbl5.bookstore.service.RegistrationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/")
@Slf4j
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private RegistrationService registrationService;

    // get all account
    @GetMapping("/accounts")
    private ResponseEntity<List<Account>> getAllAccount(){
        return ResponseEntity.ok(accountService.getAllAccount());
    }

    @PostMapping("/registration")
    private ResponseEntity<String> addNewAccount(@RequestBody RegistrationDTO registrationDTO){
        return ResponseEntity.ok(registrationService.register(registrationDTO));
    }

    @PutMapping("/accounts/{id}")
    private ResponseEntity<Account> updateAccount(@PathVariable long id, @RequestBody Account account){
        Account account1 = accountService.findAccountById(id);
        account1.setEmail(account.getEmail());
        account1.setPassword(account.getPassword());
        Account updateAccount = accountService.updateAccount(account1);
        return ResponseEntity.ok(updateAccount);
    }

    @GetMapping("/account/{id}")
    private ResponseEntity<Account> getAccountById(@PathVariable long id){
        return ResponseEntity.ok(accountService.findAccountById(id));
    }

    @GetMapping("/registration/confirm")
    public String confirm(@RequestParam("token") String token){
        return registrationService.confirmToken(token);
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Anhdai ")){
            try {
                String refresh_token = authorizationHeader.substring("Anhdai ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String email = decodedJWT.getSubject();
                log.info("email is {}", email);
                Account account = accountService.findAccountByEmail(email);

                String access_token = JWT.create()
                        .withSubject(account.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 3 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("roles", account.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                        .sign(algorithm);

                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            }
            catch (Exception e){
                response.setHeader("error", e.getMessage());
                response.setStatus(HttpStatus.FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", e.getMessage());
                response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        }
        else {
            throw new RuntimeException("Refresh token is missing");
        }
    }

    // api reset password

    @PutMapping("/accounts/reset-password")
    public ResponseEntity<Map<String , String>> resetPassword(@RequestParam("email") String email){
        Map<String, String> result = new HashMap<>();
        String reseted = accountService.resetPassword(email);
        result.put("status", reseted);

        return ResponseEntity.ok(result);
    }

    @PutMapping("/accounts/change-password/{id}")
    public ResponseEntity<Account> changePassword(@PathVariable long id, @RequestBody String password){
        Account account = accountService.changePassword(id, password);
        return ResponseEntity.ok(account);
    }

}
