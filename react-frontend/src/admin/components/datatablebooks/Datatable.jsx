import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { bookRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookService from "../../../service/BookService";

const DatatableBooks = () => {

  const [books, setBooks] = useState([]);
  // const [data, setData] = useState([]);
  
  useEffect(() => {
    BookService.getAllBook()
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  },[])


  // {books.map((book) => {
  //   field: {book.id},
  //   headerName: {}
  // })}
  
  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  const bookColumns = [
    { 
      field: "id", 
      headerName: "ID", 
      width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "email",
      headerName: "Publication date",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "author",
      headerName: "Author",
      width: 230,
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/product/detail" >
              <div className="viewButton">View</div>
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
        <Link to="/admin/product/new" className="link">
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