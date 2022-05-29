package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Author;

import java.util.List;

public interface AuthorAdminService {
    List<Author> getAllAuthors();
    Author saveAuthor(Author author);
    Author findAuthorById(long id);
    void deleteAuthor(long id);
}
