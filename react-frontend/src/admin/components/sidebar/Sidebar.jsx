import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">BookStore</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/admin" className="link">
            <li>
              <DashboardIcon className="icon" />
              <span>Bảng kiểm duyệt</span>
            </li>
          </Link>
          <Link to="/admin/user" className="link">
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Quản lí người dùng</span>
            </li>
          </Link>
          <Link to="/admin/genres" className="link">
            <li>
              <CategoryIcon className="icon" />
              <span>Quản lí danh mục</span>
            </li>
          </Link>
          <Link to="/admin/books" className="link">
            <li>
              <MenuBookOutlinedIcon className="icon" />
              <span>Quản lí sách</span>
            </li>
          </Link>
          <Link to="/admin/authors" className="link">
            <li>
              <BorderColorIcon className="icon" />
              <span>Quản lí tác giả</span>
            </li>
          </Link>
          <Link to="/admin/publishers" className="link">
            <li>
              <HomeWorkIcon className="icon" />
              <span>Quản lí nhà xuất bản</span>
            </li>
          </Link>
          {/* <Link to="/admin/revenue" className="link">
            <li>
              <MonetizationOnIcon className="icon" />
              <span>Quản lí doanh thu</span>
            </li>
          </Link> */}
          <Link to="/admin/orders" className="link">
            <li>
              <TwoWheelerOutlinedIcon className="icon" />
              <span>Quản lí đơn hàng</span>
            </li>
          </Link>
          {/* <Link to="/admin/comment" className="link">
            <li>
              <NotificationsActiveOutlinedIcon className="icon" />
              <span>Notifications</span>
              <span className="counter">1</span>
            </li>
          </Link> */}
          {/* <Link to="/admin/profile" className="link">
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin</span>
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
