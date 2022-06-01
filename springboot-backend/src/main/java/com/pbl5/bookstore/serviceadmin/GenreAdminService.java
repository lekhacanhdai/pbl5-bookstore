package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Genre;

import java.util.List;

public interface GenreAdminService {
    List<Genre> getAllGenres();
    Genre saveGenre(Genre genre);
    Genre findGenreById(long id);
    void deleteGenre(long id);
}
