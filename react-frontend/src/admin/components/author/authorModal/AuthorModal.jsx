import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React , { useState, useEffect } from 'react';

const AuthorModal = (props) => {
    return (
        <div>
            <Dialog 
                open={props.open} 
                onClose={props.handleClose}
            >
                <DialogTitle>{props.data.id ? "Cập nhập tác giả" : "Thêm tác giả"}</DialogTitle>
                
                <DialogContent>    
                    <form >
                        <TextField
                            name='firstName'
                            style={{marginTop: "20px"}}
                            autoFocus
                            margin="dense"
                            label="Họ"
                            fullWidth
                            variant="outlined"
                            defaultValue={props.data.firstName}
                            onChange={e => props.onChange(e)}
                        />
                        <TextField
                            name='lastName'
                            style={{marginTop: "20px"}}
                            autoFocus
                            margin="dense"
                            label="Tên"
                            fullWidth
                            variant="outlined"
                            defaultValue={props.data.lastName}
                            onChange={e => props.onChange(e)}
                        />
                        <TextField
                            name='companyName'
                            style={{marginTop: "20px"}}
                            autoFocus
                            margin="dense"
                            label="Tên công ty"
                            fullWidth
                            variant="outlined"
                            defaultValue={props.data.companyName}
                            onChange={e => props.onChange(e)}
                        />
                    </form>                     
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={props.handleClose} 
                        variant="outlined"
                        color='secondary'
                    >
                        Hủy
                    </Button>
                    <Button 
                        variant="contained"
                        color='primary'
                        style={{marginLeft: '20px'}}
                        onClick={() => props.handleFormSubmit()}
                    >
                        {props.data.id ? "Cập nhập": "Thêm"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
}

export default AuthorModal