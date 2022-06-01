import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../service/BookService';


const DetailAuthor = ({closeModal}) => {

    const [author, setAuthor] = useState([]);

    useEffect(() => {
        BookService.putUpdateAuthor()
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
                Update Author
            </div>
            <div className="modal-body">
                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        First Name
                    </label>
                    <input type="text" name='firstName' className='modal-input'/>
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Last Name
                    </label>
                    <input type="text" name='lastName' className='modal-input'/>
                </div>

                <div className="modal-form">
                    <label for="name" className='modal-label'>
                        Company Name
                    </label>
                    <input type="text" name='companyName' className='modal-input'/>
                </div>
                <div className="button">
                    <button className='update-author'>
                    <UpgradeIcon className='icon-update'/>Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailAuthor