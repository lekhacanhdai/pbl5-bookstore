import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from 'react';
import BookService from '../../../../service/BookService';
import { DataGrid } from "@mui/x-data-grid";


const OrderModal = (props) => {

    const [details, setDetail] = useState([])

    useEffect(() => {
        console.log(props.data)
        // console.log(props.data)
        // console.log(props.dataId)

        // setDetail(props.dataId.map((obj) => ({
        //     title: obj.title,
        //     quantity: obj.quantity,
        //     price: obj.price,
        //     amount: obj.amount
        // })))
        // BookService.getOrderById(props.data.orderId)
        // .then((res) =>{
        //     setDetail(res.data)
        // })
        // .catch(error => console.log(error))
    },[])

    const revenueColumns = [
        {
            field: 'title',
            headerName: 'Tên sách',
            flex: 4
        },
        {
            field: 'quantity',
            headerName: 'Số lượng',
            flex: 2
        },
        {
            field: 'price',
            headerName: 'Đơn giá',
            flex: 2.5
        },
        {
            field: `amount`,
            headerName: 'Thành tiền',
            flex: 2.5
        }
    ]
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>Chi tiết hóa đơn</DialogTitle>
                <DialogContent style={{ width: "500px", height: "500px" }}>
                    <DataGrid
                        getRowId={(row) => row.orderId}
                        rows={props.data}
                        columns={revenueColumns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default OrderModal;