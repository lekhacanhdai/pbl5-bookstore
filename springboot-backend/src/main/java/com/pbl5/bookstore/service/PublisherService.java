package com.pbl5.bookstore.service;

import com.pbl5.bookstore.model.Publisher;

import java.util.List;

public interface PublisherService {
    public List<Publisher> getAllPublisher();

    public Publisher savePublisher(Publisher publisher);

    public Publisher findPublisherById(long id);

    public void deletePublisher(long id);
}
