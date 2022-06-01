package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Genre;
import com.pbl5.bookstore.repository.GenreRepository;
import com.pbl5.bookstore.serviceadmin.GenreAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreAdminServiceImpl implements GenreAdminService {

    @Autowired
    private GenreRepository genreRepository;

    @Override
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    @Override
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public Genre findGenreById(long id) {
        return genreRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not exist with id: " + id));
    }

    @Override
    public void deleteGenre(long id) {
        genreRepository.delete(findGenreById(id));
    }
}
