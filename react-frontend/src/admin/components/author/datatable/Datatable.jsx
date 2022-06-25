import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import BookService from "../../../../service/BookService";
import AuthorModal from "../modal/AuthorModal";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./datatable.scss";

const DatatableAuthor = () => {

    const [authors, setAuthors] = useState([]);

    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', companyName: '' })
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    const inputEl = useRef("")

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setFormData({ id: '', firstName: '', lastName: '', companyName: '' });
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleFormSubmit = async () => {

        try {
            const id = parseInt(formData.id);
            if (id) {
                const updateAuthor = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    companyName: formData.companyName
                }
                const respone = await BookService.putAuthorById(id, updateAuthor)
                handleClose();
                window.location.reload();
            } else {
                const newAuthor = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    companyName: formData.companyName
                }
                const response = await BookService.postNewAuthor(newAuthor)
                handleClose();
                window.location.reload();
            }
        } catch (error) {
            alert(error);
        }
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Bạn muốn xóa hàng này ?", id)
        if (confirm) {
            BookService.deleteAuthorById(id);
            setAuthors(authors.filter(item => item.id != id));
        }
    }

    const handleUpdate = (oldData) => {
        setFormData(oldData)
        handleClickOpen()
    }

    useEffect(() => {
        BookService.getAllAuthor()
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSearch = (searchTerm) => {
        try {
            setSearchTerm(searchTerm)
            if (searchTerm !== "") {
                const newData = authors.filter((author) => {
                    // console.log(Object.values(author).join("").toLowerCase.includes(searchTerm))
                    return Object.values(author)
                    .join("")
                    .toLowerCase("")
                    .includes(searchTerm.toLowerCase());
                })
                setSearchResults(newData)
            } else {
                setSearchResults(authors)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(authors)
    // console.log(searchResults)

    const getSearch = () => {
        handleSearch(inputEl.current.value)
    }
    const authorColumns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "firstName",
            headerName: "Họ",
            flex: 2.5
        },
        {
            field: "lastName",
            headerName: "Tên",
            flex: 2.5
        },
        {
            field: "companyName",
            headerName: "Tên công ty",
            flex: 8
        },
        {
            field: "action",
            headerName: "Hành động",
            flex: 2,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div
                            className="viewButton"
                            onClick={() => handleUpdate(params.row)}
                        >
                            Cập nhập
                        </div>
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
            {
                <AuthorModal
                    open={open}
                    handleClose={handleClose}
                    data={formData}
                    onChange={onChange}
                    handleFormSubmit={handleFormSubmit}
                />
            }

            <div className='navbar'>
                <div className="wrapper">
                    <div className="search">
                        <input
                            ref={inputEl}
                            type="text"
                            placeholder='Tìm kiếm'
                            value={searchTerm}
                            onChange={getSearch}
                        />
                        <SearchOutlinedIcon
                            className='search-icon'
                        />
                    </div>
                </div>
            </div>
            <div className="datatableTitle">
                Quản lí tác giả
                <button
                    className="link"
                    onClick={handleClickOpen}
                >
                    Thêm
                </button>
            </div>
            <DataGrid
                className="datagrid"
                rows={
                    (searchTerm.length < 1) ? authors : searchResults
                }
                columns={authorColumns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DatatableAuthor;
