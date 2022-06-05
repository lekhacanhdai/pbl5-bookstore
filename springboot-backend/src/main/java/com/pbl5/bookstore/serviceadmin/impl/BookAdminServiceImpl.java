package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Book;
import com.pbl5.bookstore.repository.BookRepository;
import com.pbl5.bookstore.serviceadmin.BookAdminService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookAdminServiceImpl implements BookAdminService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book update(Book book) {
        return bookRepository.save(book);
    }

//    @Override
//    public Optional<Book> findBookById(long id) {
//        return Optional.ofNullable(bookRepository.findById(id).orElseThrow(
//                () -> new RuntimeException("Book not exist by id: " + id)
//        ));
//    }

    @Override
    public Book findBookById(long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not exist with id" + id));
    }

    @Override
    public void deleteBook(long id) {
        bookRepository.delete(findBookById(id));
    }

    @Override
    public int getBookNumber() {
        return bookRepository.getBookNumber();
    }
}
