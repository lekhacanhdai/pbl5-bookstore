package com.pbl5.bookstore.serviceadmin.impl;

import com.pbl5.bookstore.exception.ResourceNotFoundException;
import com.pbl5.bookstore.repository.PublisherRepository;
import com.pbl5.bookstore.model.Publisher;
import com.pbl5.bookstore.serviceadmin.PublisherAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherAdminServiceImpl implements PublisherAdminService {

    @Autowired
    private PublisherRepository publisherRepository;

    @Override
    public List<Publisher> getAllPublisher() {
        return publisherRepository.findAll();
    }

    @Override
    public Publisher savePublisher(Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    @Override
    public Publisher findPublisherById(long id) {
        return publisherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publisher not exist with id: " + id));
    }

    @Override
    public void deletePublisher(long id) {
        publisherRepository.delete(findPublisherById(id));
    }
}
