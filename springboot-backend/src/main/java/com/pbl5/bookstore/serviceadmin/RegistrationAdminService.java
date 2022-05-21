package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.dto.RequestNewAccountDTO;
import com.pbl5.bookstore.model.Account;

public interface RegistrationAdminService {
    public Account register(RequestNewAccountDTO requestNewAccountDTO);
}
