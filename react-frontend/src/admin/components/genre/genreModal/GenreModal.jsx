import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React , { useState, useEffect } from 'react';

const GenreModal = (props) => {

    return (
        <div>
            <Dialog 
                open={props.open} 
                onClose={props.handleClose}
            >
                <DialogTitle>{props.data.id ? "Cập nhập thể loại" : "Thêm thể loại"}</DialogTitle>
                
                <DialogContent>    
                    <form >
                        <TextField
                            name='name'
                            style={{marginTop: "20px"}}
                            autoFocus
                            margin="dense"
                            label="Tên thể loại"
                            fullWidth
                            variant="outlined"
                            value={props.data.name}
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

export default GenreModal