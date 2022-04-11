package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.Acount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcountRepository extends JpaRepository<Acount, Long> {
}
