import "./detail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import BookService from "../../../service/BookService";
import { useLocation, Link } from 'react-router-dom';

// import { Comment, Avatar, Rate } from "antd";
import Button from '@mui/material/Button';



const Detail = () => {
    const location = useLocation();

    const idbook = location.pathname.split('/')[3]
    const [book, setBook] = useState({
        title: "",
        publisher: "",
        author: "",
        price: "",
        genre: "",
        weight: "",
        size: "",
        pages: "",
        publiccationDate: "",
        description: "",
    });
    const [file, setFile] = useState("");
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [genres, setGenres] = useState([]);



    useEffect(() => {
        BookService.getBookbyId(idbook)
            .then((res) => {
                setBook(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const handleUpdate = async () => {
        try{
            await BookService.putBookById(idbook,book)
            console.log(book)
            console.log(idbook)

            alert("Cập nhập thành công !")
        }catch(error){
            console.log(error)
        }
    };

    const handleFileChange = (e) => {
        let file = e.target.files[0];
        setFile(file)
    }

    useEffect(() => {
        BookService.getAllPublisher()
            .then((res) => {
                setPublishers(res.data)
            })
            .catch((err) => console.log(err));
        BookService.getAllAuthor()
            .then((res) => {
                setAuthors(res.data)
            })
            .catch((err) => console.log(err));
        BookService.getAllGenre()
            .then((res) => {
                setGenres(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    // useEffect(() => {
    //     book.publiccationDate = book.publiccationDate.substring(0, 10);
    // }, [])

    const handleChange = (e) => {
        // console.log(e.target.value)
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const [title, setTitle] = useState(localStorage.getItem('bookTitle'));


    return (
        <div className="detail">
            <Sidebar />
            <div className="Container">
                <form>
                    <div className="productContainer">
                        <div className="imgContainer">
                            <img
                                src={
                                    file ? URL.createObjectURL(file) : book.image                                }
                                alt=""
                            />
                        </div>
                        <div className="infoContainer">
                            <h1 className="title">{book.title}</h1>
                            <div className="info">
                                <div className="detailinfo">
                                    <div className="publisher">Nhà xuất bản:
                                        <select
                                            name="publisher"
                                            className="select"
                                            onChange={handleChange}
                                            value={book.publisher.name}
                                        >
                                            {publishers.map((publisher) => (
                                                <option
                                                    key={publisher.id}
                                                    value={publisher.name}
                                                >
                                                    {publisher.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="author">Tác giả:
                                        <select
                                            name="author"
                                            className="select"
                                            onChange={handleChange}
                                            value={book.author.companyName}
                                        >
                                            {authors.map((author) => (
                                                <option
                                                    key={author.id}
                                                    value={author.companyName}
                                                >
                                                    {author.companyName}
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
                            <Button onClick={handleUpdate}>
                                <span>
                                    <UpgradeIcon className="icon" />
                                </span>
                                <Link to="/admin/books" className="link-addbook">
                                    Cập nhập
                                </Link>                                
                            </Button>
                            <div className="input-file">
                                <label htmlFor="file" className="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="productContainer">
                        <div className="infoContainer">
                            <h3 className="title">Thông tin sản phẩm</h3>
                            <div className="detailContainer">
                                <ul>
                                    <li>
                                        <span>Thể loại</span>
                                        <select
                                            name="genre"
                                            className="select"
                                            onChange={handleChange}
                                            value={book.genre.name}
                                        >
                                            {genres.map((genre) => (
                                                <option
                                                    key={genre.id}
                                                    value={genre.name}
                                                >
                                                    {genre.name}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <li>
                                        <span>Ngày xuất bản</span>
                                        <input
                                            name="publiccationDate"
                                            type="text"
                                            value={book.publiccationDate.substring(0, 10)}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li>
                                        <span>Số trang</span>
                                        <input
                                            name="pages"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.pages}
                                        />
                                    </li>
                                    <li>
                                        <span>Kích thước</span>
                                        <input
                                            name="size"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.size}
                                        />
                                    </li>
                                    <li>
                                        <span>Trọng lượng (gr)</span>
                                        <input
                                            name="weight"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.weight}
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

export default Detail;
