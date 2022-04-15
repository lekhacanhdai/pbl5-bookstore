package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Author;
import com.pbl5.bookstore.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
public class AuthorController {


    @Autowired
    private AuthorService authorService;

    // get all author rest api

    @GetMapping("/authors")
    public List<Author> getAllAuthor(){
        return authorService.getAllAuthor();
    }

    // get author by id rest api

    @GetMapping("/authors/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable long id){
        Author author = authorService.getAuthorById(id);
        return ResponseEntity.ok(author);
    }

    // create author rest api

    @PostMapping("/authors")
    public Author createAuthor(@RequestBody Author author){
        return authorService.saveAuthor(author);
    }

    // update author rest api

    @PutMapping("/authors/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable long id, @RequestBody Author author){
        Author author1 = authorService.getAuthorById(id);
        author1.setFirstName(author.getFirstName());
        author1.setLastName(author.getLastName());
        author1.setCompanyName(author.getCompanyName());
        Author updateAuthor = authorService.saveAuthor(author1);
        return ResponseEntity.ok(updateAuthor);
    }

    // delete author

    @DeleteMapping("/authors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAuthor(@PathVariable long id) {
        authorService.deleteAuthorById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
