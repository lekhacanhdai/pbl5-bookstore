import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./newauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import BookService from '../../../../service/BookService';

const NewAuthor = ({closeModal}) => {

    const [author, setAuthor] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
    });

    const handleChange = (e) =>{
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/admin/api/v1/authors',({
            firstName: author.firstName,
            lastName: author.lastName,
            companyName: author.companyName,
        }),{
            headers: {
                authorization: ' JWT fefege...' ,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            } 
        } )
    }
    
  return (
    <div className='modal'>
        <div className="modal-container">
            <form onSubmit={handleAdd}>

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
                        <input 
                            name='firstName' 
                            className='modal-input'
                            onChange={handleChange}
                            value={author.firstName}
                        />
                    </div>

                    <div className="modal-form">
                        <label for="name" className='modal-label'>
                            Họ
                        </label>
                        <input 
                            name='lastName'
                            className='modal-input'
                            onChange={handleChange}
                            value={author.lastName}
                        />
                    </div>

                    <div className="modal-form">
                        <label for="name" className='modal-label'>
                            Tên công ty
                        </label>
                        <input 
                            value={author.companyName}
                            name="companyName"
                            className='modal-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button">
                        <button className='add-author'>
                        <AddIcon className='icon-add'/>Thêm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewAuthor