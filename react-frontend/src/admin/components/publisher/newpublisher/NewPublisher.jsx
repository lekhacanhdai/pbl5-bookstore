import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./newpublisher.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import BookService from '../../../../service/BookService';

const NewPublisher = ({closeModal}) => {

    const [publisher, setPublisher] = useState({
        name: ''
    });

    const handleChange = (e) =>{
        setPublisher({
            ...publisher,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        await BookService.postNewPublisher({
            name: publisher.name
        })

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
                        Thêm Nhà xuất bản
                    </div>
                    <div className="modal-body">
                        <div className="modal-form">
                            <label for="name" className='modal-label'>
                                Tên nhà xuất bản
                            </label>
                            <input 
                                name='name' 
                                className='modal-input'
                                onChange={handleChange}
                                value={publisher.name}
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

export default NewPublisher