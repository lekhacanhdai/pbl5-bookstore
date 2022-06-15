import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";
import { Comment, Avatar, Rate } from "antd";
import axios from "axios";

// const ExampleComment = ({ children }) => (
//   <Comment
//     actions={[<span key="comment-nested-reply-to">Trả lời</span>]}
//     author={<a>Han Solo</a>}
//     avatar={<Avatar />}
//     content={
//       <p>
//         We supply a series of design principles, practical patterns and high
//         quality design resources (Sketch and Axure).
//       </p>
//     }
//   >
//     {children}
//   </Comment>
// );

const New = () => {
  
  
  const [file, setFile] = useState("");
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState([]);

  const [book, setBook] = useState({
    title: "",
    publisher: "",
    author: "",
    price: "",
    genre: "",
    weight: "",
    size: "",
    page: "",
    publiccationDate: "",
    description: ""
  });
  
  const handleAdd = (e) => {
    const url = "";
    e.preventDefault();
    axios.post(url,book)
  }

  const handleChange = ({ currentTarget: Input}) =>{
    setBook({...book, [Input.name]: Input.value})
  }

  const handleChangeAuthor = (e) =>{
    const selectedAuthor = e.target.value;
    setAuthor(selectedAuthor);
  }

  // useEffect(() => {
  //   BookService.getAllAuthor()
  //   .then((res) => {
  //     setAuthors(res);
  //   })
  //   .catch((err) => console.log(err));
  // },[])
  

  return (
    <div className="new">
      <Sidebar />
      <div className="Container">
        <form onSubmit={handleAdd}>
          <div className="productContainer">
            <div className="imgContainer">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <div className="infoContainer">
              <input 
                name="title"
                type="text" 
                className="title-Product" 
                onChange={handleChange}
                value={book.title}
              />
              <div className="info">
                <div className="detailinfo">
                  <div className="publisher">Nhà xuất bản:
                    <input 
                      name="publisher"
                      type="text" 
                      onChange={handleChange}
                      value={book.publisher}
                    />
                  </div>
                  <div className="author">Tác giả:
                    <select
                      name="author" 
                      className="select-author"
                      onChange={handleChangeAuthor}
                    >
                      {authors.map((author) => (
                        <option 
                          key={author.id}
                          value={author.companyName}
                          >{author.companyName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <span className="price">
                <input 
                  name="price"
                  type="text" 
                  className="input-price" 
                  size="5"
                  onChange={handleChange}
                  value={book.price}
                /> đ
              </span>
              <button>
                <span>
                  <AddCircleOutlineIcon className="icon" />
                </span>
                ADD
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
                    <input 
                      name="Gener"
                      type="text" 
                      onChange={handleChange} 
                      value={book.genre}
                    />
                  </li>
                  <li>
                    <span>Tác giả</span>
                    <input
                      name="author" 
                      type="text" 
                      onChange={handleChange}
                    />
                  </li>
                  
                  <li>
                    <span>Nhà xuất bản</span>
                    <input 
                      name="publisher"
                      type="text" 
                      onChange={handleChange}
                      value={book.publisher}
                    />
                  </li>
                  <li>
                    <span>Năm xuất bản</span>
                    <input 
                      name="publicationDate"
                      type="text"  
                      onChange={handleChange}
                      value={book.publiccationDate}
                    />
                  </li>
                  
                  <li>
                    <span>Trọng lượng(gr)</span>
                    <input 
                      name="weight"
                      type="text" 
                      onChange={handleChange}
                      value={book.weight}
                    />
                  </li>
                  <li>
                    <span>Số trang</span>
                    <input 
                      name="page"
                      type="text" 
                      onChange={handleChange}
                      value={book.page}
                    />
                  </li>
                </ul>
                <textarea    
                  name="description"
                  className="text"              
                  onChange={handleChange}
                  value={book.description}
                  
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

export default New;
