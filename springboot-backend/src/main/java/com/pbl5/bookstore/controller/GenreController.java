package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Genre;
import com.pbl5.bookstore.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
public class GenreController {

    @Autowired
    private GenreService genreService;

    // get all genre rest api

    @GetMapping("/genres")
    public List<Genre> getAllGenre(){
        return genreService.getAllGenre();
    }

    // find genre by id rest api
    @GetMapping("/genres/{id}")
    public ResponseEntity<Genre> findGenreById(@PathVariable long id){
        Genre genre = genreService.findGenreById(id);
        return ResponseEntity.ok(genre);
    }

    // create genre rest api

    @PostMapping("/genres")
    public Genre createGenre(@RequestBody Genre genre){
        return genreService.saveGenre(genre);
    }

    // update genre rest api
    @PutMapping("/genres/{id}")
    public ResponseEntity<Genre> updateGenre(@PathVariable long id, @RequestBody Genre genre){
        Genre genre1 = genreService.findGenreById(id);
        genre1.setName(genre.getName());
        Genre updateGenre = genreService.saveGenre(genre1);
        return ResponseEntity.ok(updateGenre);
    }

    // delete genre rest api

    @DeleteMapping("/genres/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteGenre(@PathVariable long id){
        genreService.deleteGenre(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
