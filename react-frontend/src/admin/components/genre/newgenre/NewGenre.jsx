import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./newgenre.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import BookService from '../../../../service/BookService';

const NewGenre = ({closeModal}) => {

    const [genre, setGenre] = useState({
        name: ''
    });

    const handleChange = (e) =>{
        setGenre({
            ...genre,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        await BookService.postNewAuthor({
            name: genre.name
        })
        alert("Thêm thành công");
        window.location.href = window.location.href;
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
                    Thêm thể loại
                </div>
                <div className="modal-body">
                    <div className="modal-form">
                        <label for="name" className='modal-label'>
                            Tên 
                        </label>
                        <input 
                            name='name' 
                            className='modal-input'
                            onChange={handleChange}
                            value={genre.name}
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


export default NewGenre;