package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Book;

import java.util.List;

public interface BookService {
    public List<Book> getAllBook();
    public Book findBookById(long id);
    public Book saveBook(Book book);
    public void deleteBook(long id);
}
