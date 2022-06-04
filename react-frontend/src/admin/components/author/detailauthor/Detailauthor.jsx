import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../../service/BookService';


const DetailAuthor = ({closeModal}) => {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        BookService.getAuthorbyId()
        .then((res) => {
            setAuthor(res.data);
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    },[])
    
    const handleChange = (e) => {
        
    }

    const handleUpdate = (id) => {

    }

  return (
    <div className='modal'>
        <div className="modal-container">
            <span className="modal-close">
                <CloseIcon className='icon-close' onClick={() => closeModal(false)}/>
            </span>
            <div className="modal-header">
                <BorderColorIcon className='icon-header'/>
                Cập nhật tác giả
            </div>
            <div className="modal-body">
                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Tên
                    </label>
                    <input 
                        name='firstName' 
                        className='modal-input'
                        value=""
                    />
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Họ
                    </label>
                    <input  
                        name='lastName' 
                        className='modal-input'
                        value=""
                    />
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Tên công ty
                    </label>
                    <input 
                        name='companyName' 
                        className='modal-input'
                        value=""
                    />
                </div>
                <div className="button">
                    <button className='update-author'>
                    <UpgradeIcon className='icon-update'/>Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailAuthor