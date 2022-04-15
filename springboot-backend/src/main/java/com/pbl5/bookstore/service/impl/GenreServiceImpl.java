package com.pbl5.bookstore.service.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.model.Genre;
import com.pbl5.bookstore.repository.GenreRepository;
import com.pbl5.bookstore.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreRepository genreRepository;

    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @Override
    public List<Genre> getAllGenre() {
        return genreRepository.findAll();
    }

    @Override
    public Genre findGenreById(long id) {
        return genreRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Genre not exist with id " + id));
    }

    @Override
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public void deleteGenre(long id) {
        genreRepository.delete(findGenreById(id));
    }
}
