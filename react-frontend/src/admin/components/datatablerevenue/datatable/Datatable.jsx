import { DataGrid } from "@mui/x-data-grid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useRef, useState } from "react";
import BookService from "../../../../service/BookService";
import GenreModal from "../modal/GenreModal"
import "./datatable.scss";

const DatatableRevenue = (props) => {

    const [revenues, setRevennues] = useState([]);

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

    const handleView = (oldData) => {
        // setFormData(oldData)
        handleClickOpen()
    }

    const getPublishers = () => {
        BookService.getAllPublisher()
            .then((res) => {
                setRevennues(res.data);
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
                const newData = revenues.filter((revenue) => {
                    return Object.values(revenue)
                    .join("")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                })
                setSearchResults(newData)
            } else {
                setSearchResults(revenues)
            }
        }catch(error){
            console.log(error)
        }

    }

    

    const getSearch = () => {
        handleSearch(inputEl.current.value);
    }

    

    const publisherColumns = [
        { field: "id", headerName: "Mã đơn hàng", flex: 2 },
        {
            field: "name",
            headerName: "Tên khách hàng",
            flex: 4
        },
        {
            field: "date",
            headerName: "Ngày mua",
            flex: 3
        },
        {
            field: "price",
            headerName: "Tổng tiền",
            flex: 2
        },
        {
            field: "paymentstatus",
            headerName: "Trạng thái",
            flex: 3
        },
        {
            field: "action",
            headerName: "Hành động",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div
                            className="viewButton"
                            onClick={() => handleView(params.row)}
                        >
                            Xem
                        </div>
                    </div>
                );
            },
        },
    ];


    return (

        <div className="datatable">
             {
                <GenreModal
                    open={open}
                    handleClose={handleClose}
                    // data={formData}
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
                Quản lí doanh thu
            </div>
            <DataGrid
                rows={
                    (searchTerm.length < 1) ? revenues : searchResults
                }
                columns={publisherColumns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DatatableRevenue;
