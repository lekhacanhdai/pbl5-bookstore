package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.model.Author;
import com.pbl5.bookstore.serviceadmin.AuthorAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/api/v1/")
public class AuthorAdminController {
    @Autowired
    private AuthorAdminService authorAdminService;

    @GetMapping("/authors")
    private ResponseEntity<List<Author>> getAllAuthors(){
        return ResponseEntity.ok(authorAdminService.getAllAuthors());
    }

    @PostMapping("/authors")
    private ResponseEntity<Author> saveAuthor(@RequestBody Author author){
        return ResponseEntity.ok(authorAdminService.saveAuthor(author));
    }

    @PutMapping("/authors/{id}")
    private ResponseEntity<Author> updateAuthor(@PathVariable long id, @RequestBody Author author){
        Author author1 = authorAdminService.findAuthorById(id);
        author1.setFirstName(author.getFirstName());
        author1.setLastName(author.getLastName());
        author1.setCompanyName(author.getCompanyName());

        return ResponseEntity.ok(authorAdminService.saveAuthor(author1));
    }

    @DeleteMapping("/authors/{id}")
    private ResponseEntity<Map<String,Boolean>> deleteAuthor(@PathVariable long id){
        Map<String,Boolean> response = new HashMap<>();
        authorAdminService.deleteAuthor(id);
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
