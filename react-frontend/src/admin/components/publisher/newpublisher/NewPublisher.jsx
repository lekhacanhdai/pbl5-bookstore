import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./newpublisher.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import BookService from '../../../../service/BookService';

const NewPublisher = ({closeModal}) => {

    const [publisher, setPublisher] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
    });

    const handleChange = (e) =>{
        setPublisher({
            ...publisher,
            [e.target.name]: e.target.value
        })
    }

    // const handleAdd = async (e) => {
    //     e.preventDefault();
    //     BookService.postNewAuthor({
    //         firstName: author.firstName,
    //         lastName: author.lastName,
    //         companyName: author.companyName,
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // }
    
  return (
    <div className='modal'>
        <div className="modal-container">
            <form onSubmit={setPublisher}>

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
                            Tên nhà xuất bản
                        </label>
                        <input 
                            value={publisher.companyName}
                            name="publisher"
                            className='modal-input'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button">
                        <button className='add-publisher'>
                        <AddIcon className='icon-add'/>Thêm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewPublisher