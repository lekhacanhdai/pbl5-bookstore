import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Narbav() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="items">
        <div className="item">

        </div>
      </div>
    </div>
  )
}

export default Narbav