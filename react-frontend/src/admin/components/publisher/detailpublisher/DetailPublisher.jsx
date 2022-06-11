import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React , { useState, useEffect } from 'react';

const DetailPublisher = (props) => {

  const [publisher, setPublisher] = useState({
    name: ''
  });

  const handleChange = (e) => {
    setPublisher({
      ...publisher,
      [e.target.name]: e.target.value
    })
  }

  
  return (
    <div>
      <Dialog 
        open={props.open} 
        onClose={props.handleClose}
      >
        <DialogTitle>{props.id? "Thêm nhà xuất bản" : "Cập nhật nhà xuất bản"}</DialogTitle>
        <DialogContent>
          <TextField
            style={{marginTop: "20px"}}
            autoFocus
            margin="dense"
            id="name"
            label="Name publisher"
            fullWidth
            variant="outlined"
            defaultValue={props.name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={props.handleClose} 
            variant="outlined"
            color="secondary"
          >
            Hủy
          </Button>
          <Button onClick={props.handleClose}>{props.id ? "Thêm" : "Cập nhật"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DetailPublisher
