import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailpublisher.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../../service/BookService';


const DetailPublisher = ({closeModal}) => {

    const [author, setAuthor] = useState([]);

    // useEffect(() => {
    //     BookService.putUpdateAuthor()
    //     .then((res) => {
            
    //     })
    //     .catch((err) => console.log(err))
    // },[])
    
  return (
    <div className='modal'>
        <div className="modal-container">
            <span className="modal-close">
                <CloseIcon className='icon-close' onClick={() => closeModal(false)}/>
            </span>
            <div className="modal-header">
                <BorderColorIcon className='icon-header'/>
                Cập nhật nhà xuất bản
            </div>
            <div className="modal-body">
                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Tên nhà xuất bản
                    </label>
                    <input name='companyName' className='modal-input'/>
                </div>
                <div className="button">
                    <button className='update-publisher'>
                    <UpgradeIcon className='icon-update'/>Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPublisher