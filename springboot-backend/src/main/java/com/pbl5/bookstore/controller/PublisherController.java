package com.pbl5.bookstore.controller;

import com.pbl5.bookstore.model.Publisher;
import com.pbl5.bookstore.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
public class PublisherController {
    @Autowired
    private PublisherService publisherService;

    // get all publisher rest api

    @GetMapping("/publishers")
    public List<Publisher> getAllPublisher(){
        return publisherService.getAllPublisher();
    }

    // create publisher rest api

    @PostMapping("/publishers")
    public Publisher createPublisher(@RequestBody Publisher publisher){
        return publisherService.savePublisher(publisher);
    }

    // get publisher by id rest api

    @GetMapping("/publishers/{id}")
    public ResponseEntity<Publisher> getPublisherById(@PathVariable long id){
        Publisher publisher = publisherService.findPublisherById(id);
        return ResponseEntity.ok(publisher);
    }

    // update publisher rest api

    @PutMapping("/publishers/{id}")
    public ResponseEntity<Publisher> updatePublisher(@PathVariable long id, @RequestBody Publisher publisher){
        Publisher publisher1 = publisherService.findPublisherById(id);
        publisher1.setName(publisher.getName());
        Publisher updatePublisher = publisherService.savePublisher(publisher1);
        return ResponseEntity.ok(updatePublisher);
    }

    // delete publisher api

    @DeleteMapping("/publishers/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePublisher(@PathVariable long id){
        publisherService.deletePublisher(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
