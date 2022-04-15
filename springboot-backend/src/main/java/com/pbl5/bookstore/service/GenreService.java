package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Genre;

import java.util.List;

public interface GenreService {
    public List<Genre> getAllGenre();
    public Genre findGenreById(long id);
    public Genre saveGenre(Genre genre);
    public void deleteGenre(long id);
}
