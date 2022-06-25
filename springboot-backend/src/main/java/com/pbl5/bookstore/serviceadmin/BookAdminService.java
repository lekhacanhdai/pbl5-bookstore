package com.pbl5.bookstore.serviceadmin;

import com.pbl5.bookstore.model.Book;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface BookAdminService {
    List<Book> getAllBooks();
    Book saveBook(Book book);
    Book update(Book book);
    Book updateImg(long bookId, MultipartFile multipartFile) throws IOException;
    Book findBookById(long id);
    void deleteBook(long id);
    int getBookNumber();

}
