import { DataGrid } from "@mui/x-data-grid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useRef, useState } from "react";
import BookService from "../../../../service/BookService";
import OrderModal from "../modal/OrderModal";
import "./datatable.scss";

const DatatableOrder = (props) => {

    const [orders, setOrders] = useState([]);

    const [open, setOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [formData, setFormData] = useState(
        {
            orderId: '',
            username: '',
            dateOrder: '',
            amount: '',
            paymentStatus: ''
        }
    )

    const [formDataId, setFormDataId] = useState([])

    const inputEl = useRef("");

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setFormData({
            orderId: '',
            username: '',
            dateOrder: '',
            amount: '',
            paymentStatus: ''
        })
        setFormDataId([])
    }

    const handleView = (oldData) => {
        handleClickOpen()
        setFormData(oldData)
        BookService.getOrderById(oldData.orderId)
        .then((res) => {
            setFormDataId(res.data)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        BookService.getAllOrder()
            .then((res) => {
                setOrders(res.data);
                // console.log(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        orders.forEach((order) => {
            order.dateOrder = order.dateOrder.substring(0, 10)
            let check = order.paymentStatus
            check ? order.paymentStatus = "Đã thanh toán" : order.paymentStatus = "Chưa thanh toán"
        })
    }, [orders])

    const handleSearch = (searchTerm) => {
        try {
            setSearchTerm(searchTerm)
            if (searchTerm !== "") {
                const newData = orders.filter((publisher) => {
                    return Object.values(publisher)
                        .join("")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                })
                setSearchResults(newData)
            } else {
                setSearchResults(orders)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getSearch = () => {
        handleSearch(inputEl.current.value);
    }


    const orderColumns = [
        {
            field: "orderId",
            headerName: "Mã hóa đơn",
            flex: 2
        },
        {
            field: "username",
            headerName: "Tên khách hàng",
            flex: 3
        },
        {
            field: "dateOrder",
            headerName: "Ngày ",
            flex: 3
        },
        {
            field: "amount",
            headerName: "Thành tiền",
            flex: 3
        },
        {
            field: "paymentStatus",
            className: `${orders.paymentStatus}`,
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
                <OrderModal
                    open={open}
                    handleClose={handleClose}
                    data={formData}
                    dataId={formDataId}
                    // data={formData.concat(formDataId)}
                // onChange={onChange}
                // handleFormSubmit={handleFormSubmit}
                />
            }
            {console.log(formData)}
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
                Quản lí đơn hàng
            </div>
            <DataGrid
                className="datagrid"
                getRowId={(row) => row.orderId}
                rows={
                    (searchTerm.length < 1) ? orders : searchResults
                }
                columns={orderColumns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DatatableOrder;
