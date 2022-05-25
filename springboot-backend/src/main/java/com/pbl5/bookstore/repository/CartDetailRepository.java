package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.CartDetail;
import com.pbl5.bookstore.model.CartDetailKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface CartDetailRepository extends JpaRepository<CartDetail, Long> {
    Optional<CartDetail> getCartDetailById(CartDetailKey cartDetailKey);

    @Modifying
    @Transactional
    @Query("DELETE FROM CartDetail c where " +
            "c.id.bookId = ?1 and c.id.cartId = ?2")
    void deleteCartDetailByKey(long bookId, long cartId);
}
