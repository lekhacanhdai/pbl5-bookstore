import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";

const Widget = ({ type }) => {
  let data;

  const diff = 20;
  const [item, setItem] = useState([]);

  useEffect(() => {
    BookService.getDashboard()
    .then((res) => {
      setItem(res.data)  
    })
  },[]);

  switch (type) {
    case "user":
      data = {
        title: "NGƯỜI DÙNG",
        isMoney: false,
        number: `${item.userNumber}`,
        link: (
          <Link className="link-item" to="user">
            Xem tất cả
          </Link>
        ),
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ĐƠN HÀNG",
        isMoney: false,
        number: `${item.orderNumber}`,
        link: (
          <Link className="link-item" to="order">
            Xem tất cả
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "renvenue":
      data = {
        title: "DOANH THU",
        isMoney: true,
        number: `${item.revenueTotal}`,
        link: (
          <Link className="link-item" to="revenue">
            Xem tất cả
          </Link>
        ),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "books":
      data = {
        title: "SÁCH",
        isMoney: true,
        number: `${item.bookNumber}`,
        link: (
          <Link className="link-item" to="books">
            Xem tất cả
          </Link>
        ),
        icon: (
          <MenuBookOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {data.number}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
