import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailauthor.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../../service/BookService';
import DatatableAuthor from '../datatableauthor/Datatable';



const DetailAuthor = (props) => {

    const [author, setAuthor] = useState([]);

    // useEffect(() => {
    //     BookService.getAuthorbyId(author)
    //     .then((res) => {
    //         setAuthor(res.data);
    //         console.log(res.data)
    //     })
    //     .catch((err) => console.log(err))
    // },[author])
    
    const handleChange = (e) => {
        setAuthor({
            author,
            [e.target.name]: e.target.value
        });
    }

    let idauthor = props.id

    const handleUpdate = async (e) => {
        e.preventDefault();
        await BookService.putAuthorById({
            idauthor
        },{
            firstName: author.firstname,
            lastName: author.lastname,
            companyName: author.companyname
        })
        
    }

  return (
    <div className='modal'>
        <div className="modal-container">
            <form onClick={handleUpdate}>

                <span className="modal-close">
                    <CloseIcon className='icon-close' onClick={() => props.closeModal(false)}/>
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
                            defaultValue={props.firstname}
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
                            defaultValue={props.lastname}
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
                            defaultValue={props.companyname}
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