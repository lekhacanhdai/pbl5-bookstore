import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import BookService from "../../../service/BookService";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./datatable.scss";

const DatatableBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [item, setItem] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const [genres, setGenres] = useState([])

    const inputEl = useRef("");


    const getAllBook = () => {
        BookService.getAllBook()
            .then((res) => {
                setBooks(
                    res.data.map((obj) => ({
                        id: obj.id,
                        title: obj.title,
                        publiccationDate: obj.publiccationDate,
                        genre: obj.genre.name,
                        companyName: obj.author.companyName,
                    }))
                );
            })
            .catch((err) => console.log(err));
    }

    const getAllGenre = () => {
        BookService.getAllGenre()
            .then((res) => {
                setGenres(res.data);
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        getAllBook()
        getAllGenre()
    }, []);


    const handleChange = async () => {
        console.log(genres.name)
    }


    useEffect(() => {
        books.forEach((book) => {
            book.publiccationDate = book.publiccationDate.substring(0, 10);
        });
    }, [books]);


    const handleUpdate = () => {

    };

    const handleDelete = (id) => {
        const confirm = window.confirm("Bạn muốn xóa hàng này ?", id);
        if (confirm) {
            BookService.deleteBookById(id);
            setBooks(books.filter((item) => item.id !== id));
        }
    };

    const handleSearch = (searchTerm) => {
        console.log(searchTerm)
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
                if (searchTerm === "Tất cả") {
                    setSearchResults(books)
                }
            } else {
                setSearchResults(books)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const handleSelect = (item) => {
    //     console.log(item)
    // }

    const getSearch = (e) => {
        handleSearch(e.target.value)
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
            field: "genre",
            headerName: "Thể loại",
            flex: 2.5
        },
        {
            field: 'companyName',
            headerName: "Tác giả",
            flex: 2.5
        },
        {
            field: "publiccationDate",
            headerName: "Ngày xuất bản",
            flex: 2.5
        },
        {
            field: "action",
            headerName: "Hành động",

            flex: 1.5,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/admin/books/${params.row.id}`}>
                            <div className="viewButton" onClick={() => handleUpdate()}>
                                Cập nhật
                            </div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Xóa
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
            <select
                name="genre"
                className="select"
                value={genres.name}
                onChange={getSearch}
            >
                <option
                    value={books.genres}
                >
                    Tất cả
                </option>
                {genres.map((genre) => (
                    <option
                        key={genre.id}
                        value={genre.name}
                    >
                        {genre.name}
                    </option>
                ))}
            </select>
            <DataGrid
                className="datagrid"
                rows={(searchTerm.length < 1) ? books : searchResults}
                columns={bookColumns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DatatableBooks;
