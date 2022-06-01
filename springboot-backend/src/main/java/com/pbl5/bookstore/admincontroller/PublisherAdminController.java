package com.pbl5.bookstore.admincontroller;

import com.pbl5.bookstore.model.Publisher;
import com.pbl5.bookstore.serviceadmin.PublisherAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin/api/v1/")
public class PublisherAdminController {

    @Autowired
    private PublisherAdminService publisherAdminService;

    @GetMapping("/publishers")
    private ResponseEntity<List<Publisher>> getAllPublisher(){
        return ResponseEntity.ok(publisherAdminService.getAllPublisher());
    }

    @PostMapping("/publishers")
    private  ResponseEntity<Publisher> createPublisher(@RequestBody Publisher publisher){
        return ResponseEntity.ok(publisherAdminService.savePublisher(publisher));
    }

    @PutMapping("/publishers/{id}")
    private ResponseEntity<Publisher> updatePublisher(@PathVariable long id, @RequestBody Publisher publisher){
        Publisher publisher1 = publisherAdminService.findPublisherById(id);

        publisher1.setName(publisher.getName());

        return ResponseEntity.ok(publisherAdminService.savePublisher(publisher1));
    }

    @DeleteMapping("/publishers/{id}")
    private ResponseEntity<Map<String,Boolean>> deletePublisher(@PathVariable long id){
        Map<String,Boolean> response = new HashMap<>();
        publisherAdminService.deletePublisher(id);
        response.put("deleted", true);
        return  ResponseEntity.ok(response);
    }
}
