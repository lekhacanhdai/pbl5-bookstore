package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Publisher;

import java.util.List;

public interface PublisherAdminService {
    public List<Publisher> getAllPublisher();

    public Publisher savePublisher(Publisher publisher);

    public Publisher findPublisherById(long id);

    public void deletePublisher(long id);
}
