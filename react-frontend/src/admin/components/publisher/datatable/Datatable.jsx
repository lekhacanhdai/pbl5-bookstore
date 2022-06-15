import { DataGrid } from "@mui/x-data-grid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useRef, useState } from "react";
import BookService from "../../../../service/BookService";
import PublisherModal from "../modal/PublisherModal";
import "./datatable.scss";

const DatatablePublisher = (props) => {

    const [publishers, setPublishers] = useState([]);

    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({ id: '', name: '' })
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    const inputEl = useRef("");

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setFormData({ id: '', name: '' });
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleFormSubmit = async () => {
        try {
            if (formData.id) {
                const updatePublisher = {
                    name: formData.name
                }
                const respone = await BookService.putPublisherById(formData.id, updatePublisher)
                alert('Cập nhập thành công !')
                handleClose();
                getPublishers();
                setFormData({ id: '', name: '' })
            } else {
                const newPublisher = {
                    name: formData.name
                }
                const response = await BookService.postNewPublisher(newPublisher)
                alert('Thêm thành công !')
                handleClose();
                getPublishers();
                setFormData({ id: '', name: '' })
            }
        } catch (error) {
            alert(error);
        }
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Bạn muốn xóa hàng này ?", id)
        if (confirm) {
            BookService.deletePublisherById(id);
            setPublishers(publishers.filter(item => item.id != id));
        }
    }

    const handleUpdate = (oldData) => {
        setFormData(oldData)
        handleClickOpen()
    }

    const getPublishers = () => {
        BookService.getAllPublisher()
            .then((res) => {
                setPublishers(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPublishers()
    }, []);

    const handleSearch =  (searchTerm) => {
        try{
            setSearchTerm(searchTerm)
            // console.log(searchTerm)
            if (searchTerm !== "") {
                const newData = publishers.filter((publisher) => {
                    return Object.values(publisher)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                })
                setSearchResults(newData)
                // console.log(newData)
            } else {
                setSearchResults(publishers)
            }
        }catch(error){
            console.log(error)
        }

    }

    

    const getSearch = () => {
        handleSearch(inputEl.current.value);
    }

    

    const publisherColumns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "name",
            headerName: "Tên nhà xuất bản",
            flex: 12
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
                <PublisherModal
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
                Quản lí nhà xuất bản
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
                    (searchTerm.length < 1) ? publishers : searchResults
                }
                columns={publisherColumns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DatatablePublisher;
