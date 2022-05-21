package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookAdminService {
    List<Book> getAllBooks();
    Book saveBook(Book book);
    Book update(Book book);
    Book findBookById(long id);
    void deleteBook(long id);

}