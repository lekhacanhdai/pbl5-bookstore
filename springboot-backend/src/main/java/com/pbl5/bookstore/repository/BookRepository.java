package com.pbl5.bookstore.repository;

import com.pbl5.bookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query(value = "SELECT count(*) FROM lpaypcdi_pbl5_bookstore.books", nativeQuery = true)
    int getBookNumber();
}
