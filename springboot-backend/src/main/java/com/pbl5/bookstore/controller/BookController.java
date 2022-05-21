package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Book;
import com.pbl5.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
public class BookController {

    @Autowired
    private BookService bookService;

    // get all book rest api

    @GetMapping("/books")
    public List<Book> getAllBook(){
        return bookService.getAllBook();
    }

    // create new book rest api

    @PostMapping("/books")
    public Book createBook(@RequestBody Book book){
        return bookService.saveBook(book);
    }

    // get book by id rest api

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable long id){
        Book book = bookService.findBookById(id);
        return ResponseEntity.ok(book);
    }

    // update book rest api

    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable long id, @RequestBody Book book){
        Book book1 = bookService.findBookById(id);
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
        Book updateBook = bookService.saveBook(book1);
        return ResponseEntity.ok(updateBook);
    }

    // delete book rest api

    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable long id){
        bookService.deleteBook(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
