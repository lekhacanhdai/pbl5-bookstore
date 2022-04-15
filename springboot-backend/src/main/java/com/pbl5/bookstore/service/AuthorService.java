package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Author;

import java.util.List;

public interface AuthorService {
    public List<Author> getAllAuthor();
    public Author getAuthorById(long id);
    public Author saveAuthor(Author author);
    public void deleteAuthorById(long id);
}
