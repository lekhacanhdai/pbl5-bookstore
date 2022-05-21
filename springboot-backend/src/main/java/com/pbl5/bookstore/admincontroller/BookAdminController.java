package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.model.Book;
import com.pbl5.bookstore.serviceadmin.BookAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/api/v1")
public class BookAdminController {
    @Autowired
    private BookAdminService bookAdminService;

    @GetMapping("/books")
    private ResponseEntity<List<Book>> getAllBook(){
        return ResponseEntity.ok(bookAdminService.getAllBooks());
    }

    @PostMapping("/books")
    private ResponseEntity<Book> createBook(@RequestBody Book book){
        return ResponseEntity.ok(bookAdminService.saveBook(book));
    }

    @PutMapping("/books/{id}")
    private ResponseEntity<Book> updateBook(@PathVariable long id,@RequestBody Book book){
        Book book1 = bookAdminService.findBookById(id);
        book1.setAuthor(book.getAuthor());
        book1.setAvailableQuantity(book.getAvailableQuantity());
        book1.setDescription(book.getDescription());
        book1.setEdition(book.getEdition());
        book1.setGenre(book.getGenre());
        book1.setImage(book.getImage());
        book1.setPages(book.getPages());
        book1.setPrice(book.getPrice());
        book1.setSize(book.getSize());
        book1.setPublisher(book.getPublisher());
        book1.setTitle(book.getTitle());
        book1.setWeight(book.getWeight());
        book1.setPubliccationDate(book.getPubliccationDate());

        return ResponseEntity.ok(bookAdminService.saveBook(book1));
    }

    @DeleteMapping("/books/{id}")
    private ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable long id){
        Book book = bookAdminService.findBookById(id);
        bookAdminService.deleteBook(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
