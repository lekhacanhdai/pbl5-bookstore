import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./newauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import BookService from '../../../service/BookService';

const NewAuthor = ({closeModal}) => {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        
        BookService.postNewAuthor()
        .then((res) => {

        })
        .catch((err) => console.log(err))
    },[])
    
  return (
    <div className='modal'>
        <div className="modal-container">
            <span className="modal-close">
                <CloseIcon className='icon-close' onClick={() => closeModal(false)}/>
            </span>
            <div className="modal-header">
                <BorderColorIcon className='icon-header'/>
                Thêm Tác giả
            </div>
            <div className="modal-body">
                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Tên
                    </label>
                    <input type="text" name='firstName' className='modal-input'/>
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Họ
                    </label>
                    <input type="text" name='lastName' className='modal-input'/>
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Tên công ty
                    </label>
                    <input type="text" name='companyName' className='modal-input'/>
                </div>
                <div className="button">
                    <button className='add-author'>
                    <AddIcon className='icon-add'/>Thêm</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewAuthor