import "./detail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";
import { Comment, Avatar, Rate } from "antd";
import axios from 'axios';

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

const Detail = () => {
  // const [idbook, setidBook] = useState("")
  const [authors, setAuthors] = useState([])
  const [book, setBook] = useState([])
  // useEffect(() => {
  //   BookService.getBookbyId(item)
  //   .then((res) => {
  //     setidBook(res)
  //     console.log(res)
  //   })
  //   .catch((err) => console.log(err))
  // },[])
  const handleUpdate = (id) => {
    const url = `https:8080/api/v1/books/${id}`
    axios.put(url,id)
    .then((res) => {})
    var arr = [];
    arr.push({
      
    })
  };

  const handleChange = () =>{

  }
  
  const [title, setTitle] = useState(localStorage.getItem('bookTitle'));
  return (
    <div className="detail">
      <Sidebar />
      <div className="Container">
        <form onSubmit={handleUpdate}>
          <div className="productContainer">
            <div className="imgContainer">
              <img
                src="https://cdn0.fahasa.com/media/catalog/product/c/a/call_me_by_your_name_1_2019_01_17_08_49_24.jpg"
                alt=""
              />
            </div>
            <div className="infoContainer">
              <h1 className="title">{title}</h1>
              <div className="info">
              <div className="detailinfo">
                  <div className="publisher">Nhà xuất bản:
                    <input 
                      type="text" 
                    />
                  </div>
                  <div className="author">Tác giả:
                    <select name="" id="">
                      {authors.map((author) => (
                        <option key={author.id}>{author.companyName}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <span className="Price">20.000 đ</span>
              <button>
                <div>
                  <UpgradeIcon />
                </div>
                Update
              </button>
            </div>
          </div>
          <div className="productContainer">
            <div className="infoContainer">
              <h3 className="title">Thông tin sản phẩm</h3>
              <div className="detailContainer">
                <ul>
                  <li>
                    <span>Tên nhà cung cấp</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  <li>
                    <span>Tác giả</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  
                  <li>
                    <span>Nhà xuất bản</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  <li>
                    <span>Ngày xuất bản</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  <li>
                    <span>Số trang</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  <li>
                    <span>Kích thước</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                  <li>
                    <span>Trọng lượng(gr)</span>
                    <input type="text" 
                    onChange={handleChange}
                          
                    />
                  </li>
                </ul>
                <textarea    
                  className="text"              
                  onChange={handleChange}
                  >
                </textarea>
              </div>
            </div>
          </div>
        </form>
        {/* <div className="productContainer">
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
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
