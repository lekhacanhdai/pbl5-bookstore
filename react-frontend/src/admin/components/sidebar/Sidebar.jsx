import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
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
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/user" className="link">
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>User</span>
            </li>
          </Link>
          <Link to="/admin/books" className="link">
            <li>
              <MenuBookOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/order" className="link">
            <li>
              <TwoWheelerOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/admin/revenue" className="link">
            <li>
              <MonetizationOnIcon className="icon" />
              <span>Revenue</span>
            </li>
          </Link>
          <Link to="/admin/comment" className="link">
            <li>
              <NotificationsActiveOutlinedIcon className="icon" />
              <span>Notifications</span>
              <span className="counter">1</span>
            </li>
          </Link>
          <Link to="/admin/profile" className="link">
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
