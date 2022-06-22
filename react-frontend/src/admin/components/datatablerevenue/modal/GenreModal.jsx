import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState, useEffect } from 'react';
import BookService from '../../../../service/BookService';
import { DataGrid } from "@mui/x-data-grid";


const RevenueModal = (props) => {

    const [details, setDetail] = useState([])

    useEffect(() => {
        // BookService.getDetailBill(idBill)
        // .then((res) => setDetail(res.data))
    })

    const revenueColumns = [
        {
            field: 'name',
            headerName: 'Tên sách',
            flex: 5
        },
        {
            field: 'number',
            headerName: 'Số lượng',
            flex: 1
        },
        {
            field: 'price',
            headerName: 'Đơn giá',
            flex: 3
        },
        {
            field: 'total',
            headerName: 'Thành tiền',
            flex: 3
        }
    ]
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <DialogTitle>Chi tiết hóa đơn</DialogTitle>
                <DialogContent>
                    <DataGrid
                        rows={details}
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

export default RevenueModal;