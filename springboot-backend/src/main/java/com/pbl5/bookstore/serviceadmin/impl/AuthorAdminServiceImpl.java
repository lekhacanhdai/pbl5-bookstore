package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Author;
import com.pbl5.bookstore.repository.AuthorRepository;
import com.pbl5.bookstore.serviceadmin.AuthorAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorAdminServiceImpl implements AuthorAdminService {

    @Autowired
    private AuthorRepository authorRepository;
    @Override
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Author saveAuthor(Author author) {
        return authorRepository.save(author);
    }

    @Override
    public Author findAuthorById(long id) {
        return authorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Author not exist with id: " + id));
    }

    @Override
    public void deleteAuthor(long id) {
        authorRepository.delete(findAuthorById(id));
    }
}
