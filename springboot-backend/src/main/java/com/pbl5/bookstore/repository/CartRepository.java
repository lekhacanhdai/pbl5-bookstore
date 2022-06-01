package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c.id FROM Cart c where c.account.id = ?1")
    List<Long> getIdByAccountId(long id);
}
