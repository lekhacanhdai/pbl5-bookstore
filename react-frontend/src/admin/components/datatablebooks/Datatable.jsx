import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import BookService from "../../../service/BookService";
import { useLocation } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./datatable.scss";

const DatatableBooks = (props) => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [item, setItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([])

  const inputEl = useRef("");

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

  };

  const handleDelete = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  const handleSearch = (searchTerm) => {
    try {
      setSearchTerm(searchTerm)
      if (searchTerm !== "") {
        const newData = books.filter((book) => {
          return Object.values(book)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        })
        setSearchResults(newData)
      } else {
        setSearchResults(books)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSearch = () => {
    handleSearch(inputEl.current.value)
  }
  const bookColumns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "title",
      headerName: "Tiêu đề",

      flex: 5
    },
    {
      field: `companyName`,
      headerName: "Tác giả",
      flex: 3
    },
    {
      field: "publiccationDate",
      headerName: "Ngày xuất bản",
      flex: 2.5
    },
    {
      field: "price",
      headerName: "Giá thành",
      flex: 2
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",

      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/books/${books.id}`}>
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
      <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input
              ref={inputEl}
              type="text"
              placeholder='Tìm kiếm'
              value={props.name}
              onChange={getSearch}
            />
            <SearchOutlinedIcon
              className='search-icon'
            />
          </div>
        </div>
      </div>
      <div className="datatableTitle">
        Quản lí sách
        <Link to="/admin/books/new" className="link">
          Thêm
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={(searchTerm.length < 1) ? books : searchResults}
        columns={bookColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableBooks;
