package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByAccount_Id(long id);

    
    @Query(value = "SELECT count(*) FROM lpaypcdi_pbl5_bookstore.users",
            nativeQuery = true)
    int getUserNumber();
}
