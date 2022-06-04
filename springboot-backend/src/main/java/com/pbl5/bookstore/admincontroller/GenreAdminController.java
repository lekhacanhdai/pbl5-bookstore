package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.model.Genre;
import com.pbl5.bookstore.serviceadmin.GenreAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/api/v1/")
public class GenreAdminController {
    @Autowired
    private GenreAdminService genreAdminService;

    @GetMapping("/genres")
    private ResponseEntity<List<Genre>> getAllGenres(){
        return ResponseEntity.ok(genreAdminService.getAllGenres());
    }

    @GetMapping("/genres/{id}")
    private ResponseEntity<Genre> getGenreById(@PathVariable long id){
        return ResponseEntity.ok(genreAdminService.findGenreById(id));
    }

    @PostMapping("/genres")
    private ResponseEntity<Genre> saveGenre(@RequestBody Genre genre){
        return ResponseEntity.ok(genreAdminService.saveGenre(genre));
    }

    @PutMapping("/genres/{id}")
    private ResponseEntity<Genre> updateGenre(@PathVariable long id, @RequestBody Genre genre){
        Genre genre1 = genreAdminService.findGenreById(id);
        genre1.setName(genre.getName());

        return ResponseEntity.ok(genreAdminService.saveGenre(genre1));
    }

    @DeleteMapping("/genres/{id}")
    private ResponseEntity<Map<String,Boolean>> deleteGenre(@PathVariable long id){
        Map<String,Boolean> response = new HashMap<>();
        genreAdminService.deleteGenre(id);
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

}
