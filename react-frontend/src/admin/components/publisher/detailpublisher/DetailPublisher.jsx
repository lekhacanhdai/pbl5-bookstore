import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import "./detailpublisher.scss";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import BookService from '../../../../service/BookService';


const DetailPublisher = (props) => {

    const [publisher, setPublisher] = useState([]);

    // useEffect(() => {
    //     BookService.putUpdateAuthor()
    //     .then((res) => {
            
    //     })
    //     .catch((err) => console.log(err))
    // },[])
    

    const handleChange = (e) =>{
        setPublisher({
            publisher,
            [e.target.name]: e.target.value
        })
    }

    let idpublisher = (props.id)

    const handleUpdate = async (e) => {
        e.preventDefault();
        await BookService.putPublisherById({
            idpublisher
        },{
            name: publisher.name
        })
    }

    console.log(props.name);

  return (
    <div className='modal'>
        <form onSubmit={handleUpdate}>
            <div className="modal-container">
                <span className="modal-close">
                    <CloseIcon 
                        className='icon-close' 
                        onClick={() => props.closeModal(false)}
                    />
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
                        <input 
                            name='companyName' 
                            className='modal-input'
                            defaultValue={props.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button">
                        <button className='update-publisher'>
                        <UpgradeIcon className='icon-update'/>Cập nhật</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default DetailPublisher