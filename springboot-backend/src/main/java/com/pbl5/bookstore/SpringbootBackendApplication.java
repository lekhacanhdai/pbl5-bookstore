package com.pbl5.bookstore;


import com.pbl5.bookstore.filter.repository.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private PublisherRepository publisherRepository;

    @Override
    public void run(String... args) throws Exception {
//        Publisher publisher = new Publisher("NXB Ha Noi");
//        Book book1 = new Book("Giao duc con",new Date(), 1, 1,
//                1, 1, "40cm x 20cm", 100, "Sach hay lam", "no image");
//        Book book2 = new Book("Xin chao the gioi",new Date(), 2, 1,
//                1, 1, "40cm x 20cm", 100, "Sach hay lam", "image");
//        publisher.getBooks().add(book1);
//        publisher.getBooks().add(book2);
//        book1.setPublisher(publisher);
//        book2.setPublisher(publisher);
//        publisherRepository.save(publisher);
    }
}
