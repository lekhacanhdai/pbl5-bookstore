import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../../service/BookService';
import DatatableAuthor from '../datatableauthor/Datatable';


export const DetailAuthor1 = (props) =>{
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        
    })

  return (
    <div>detailAuthor1</div>
  )
}

const DetailAuthor = ({closeModal}) => {

    const [authorID, setAuthorID] = useState([]);

    useEffect(() => {
        BookService.getAuthorbyId(authorID)
        .then((res) => {
            setAuthorID(res.data);
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    },[authorID])
    
    const handleChange = (e) => {
        
    }

    const handleUpdate = async (e) => {
        // e.preventDefault();
        // await BookService.putAuthorById(,{
            
        // })
    }

  return (
    <div className='modal'>
        <div className="modal-container">
            <form onClick={handleUpdate}>

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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button">
                        <button className='update-author'>
                        <UpgradeIcon className='icon-update'/>Cập nhật</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default DetailAuthor