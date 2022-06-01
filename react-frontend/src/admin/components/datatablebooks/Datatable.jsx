import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookService from "../../../service/BookService";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const DatatableBooks = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [item, setItem] = useState([]);

  useEffect(() => {
    BookService.getAllBookAdmin()
      .then((res) => {
        console.log(res.data);
        setBooks(
          res.data.map((obj) => ({
            id: obj.id,
            title: obj.title,
            publiccationDate: obj.publiccationDate,
            price: obj.price,
            companyName: obj.author.companyName,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    books.forEach((book) => {
      book.publiccationDate = book.publiccationDate.substring(0, 10);
    });
  }, [books]);

  const handleView = () => {
    // axios.get('http://localhost:8080/api/v1/books/' + id)
    // .then((res) => {
    //   console.log(res);
    //   localStorage.setItem("bookTitle",res.data.title);
    //   localStorage.setItem("bookPrice",res.data.price)
    //   localStorage.setItem("bookpublicationDate",res.data.publicationDate)
    //   localStorage.setItem("bookid",res.data.id)
    //   localStorage.setItem("bookAuthor",res.data.author.companyName)
    // })
    // let book = [];
    // if(localStorage.getItem('book')){
    // };
  }

  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  // const handleDelete = (id) => {
  //   const url = `/${id}`;
  //   axios.delete(url)
  //   .then(res => {
  //     console.log(res);
  //     const data = books.filter((book) => {
  //       return book.id !== id
  //     });
  //     setBooks(data)
  //   })
  // }

  const bookColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "publiccationDate",
      headerName: "Publication date",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: `companyName`,
      headerName: "Author",
      width: 230,
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <Link to={`/admin/books/${books.id}`} >
                <div className="viewButton" onClick={() => handleView()}>
                  View
                </div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Book
        <Link to="/admin/books/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={books}
        columns={bookColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableBooks;
