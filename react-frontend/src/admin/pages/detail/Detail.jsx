import "./detail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";
import { Comment, Avatar, Rate } from "antd";

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Trả lời</span>]}
    author={<a>Han Solo</a>}
    avatar={<Avatar />}
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

const Detail = ({ item }) => {
  // const [idbook, setidBook] = useState("")

  // useEffect(() => {
  //   BookService.getBookbyId(item)
  //   .then((res) => {
  //     setidBook(res)
  //     console.log(res)
  //   })
  //   .catch((err) => console.log(err))
  // },[])

  return (
    <div className="detail">
      <Sidebar />
      <div className="Container">
        <div className="editButton">Edit</div>
        <div className="productContainer">
          <div className="imgContainer">
            <img
              src="https://cdn0.fahasa.com/media/catalog/product/c/a/call_me_by_your_name_1_2019_01_17_08_49_24.jpg"
              alt=""
            />
          </div>
          <div className="infoContainer">
            <h1 className="title">Call me by your name </h1>
            <div className="info">
                <div className="detailinfo">
                <p className="Publisher">Nhà xuất bản: ABC </p>
                <p className="Provider"> Nhà cung cấp: Thùy Linh</p>
            </div>
                <div className="detailinfo">
                <p className="author">Tác giả: CDE</p>
              </div>
            </div>
            <div className="AcsessContainer">
              <Rate disabled defaultValue={5}></Rate>
              <div className="txtRate">(0 đánh giá)</div>
            </div>
            <span className="Price">20.000 đ</span>
            <button>
              <span>
                <AddCircleOutlineIcon className="icon" />
              </span>
              <span>ADD</span>
            </button>
          </div>
        </div>
        <div className="productContainer">
          <div className="infoContainer">
            <h3 className="title">Thông tin sản phẩm</h3>
            <div className="detailContainer">
              <ul>
                <li>
                  <span>Mã hàng</span>
                  <span>8934974177715</span>
                </li>
                <li>
                  <span>Độ tuổi</span>
                  <span>15+</span>
                </li>
                <li>
                  <span>Tên nhà cung cấp</span>
                  <span>NXB Trẻ</span>
                </li>
                <li>
                  <span>Tác giả</span>
                  <span></span>
                </li>
                <li>
                  <span>Người dịch</span>
                  <span>Tuyết Quỳnh</span>
                </li>
                <li>
                  <span>Nhà xuất bản</span>
                  <span></span>
                </li>
                <li>
                  <span>Năm xuất bản</span>
                  <span>2022</span>
                </li>
                <li>
                  <span>Ngôn ngữ</span>
                  <span>Tiếng Việt</span>
                </li>
                <li>
                  <span>Trọng lượng(gr)</span>
                  <span></span>
                </li>
                <li>
                  <span>Số trang</span>
                  <span></span>
                </li>
              </ul>
              <p className="text"></p>
            </div>
          </div>
        </div>
        <div className="productContainer">
          <div className="RateContainer">
            <p className="title">Đánh giá sản phẩm</p>
            <div className="Ratepro">
              <span className="Percent">
                <div className="txtratio">
                  5<span className="txtratiochild">/5</span>
                </div>
                <Rate disabled defaultValue={5}></Rate>
                <div className="txtRate">(0 đánh giá)</div>
              </span>
              <span className="Percent">
                <div className="Percentchild">
                  <span>5 sao</span>
                  <div className="review-rating"></div>
                  <span>0%</span>
                </div>
                <div className="Percentchild">
                  <span>4 sao</span>
                  <div className="review-rating"></div>
                  <span>0%</span>
                </div>
                <div className="Percentchild">
                  <span>3 sao</span>
                  <div className="review-rating"></div>
                  <span>0%</span>
                </div>
                <div className="Percentchild">
                  <span>2 sao</span>
                  <div className="review-rating"></div>
                  <span>0%</span>
                </div>
                <div className="Percentchild">
                  <span>1 sao</span>
                  <div className="review-rating"></div>
                  <span>0%</span>
                </div>
              </span>
            </div>
            <ExampleComment>
              <ExampleComment></ExampleComment>
            </ExampleComment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
