import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import BookService from "../../../service/BookService";
import { Link } from "react-router-dom";
import { Comment, Avatar, Rate } from "antd";
import axios from "axios";

const New = () => {

    const [file, setFile] = useState('');
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState({});
    const [publishers, setPublishers] = useState([]);
    const [publisher, setPublisher] = useState({});
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState({})

    const [book, setBook] = useState({
        title: '',
        publisher: publisher,
        author: author,
        price: '',
        genre: genre,
        publiccationDate: '',
        weight: '',
        size: '',
        pages: '',
        description: '',
    });

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

    const handleFileChange = (e) => { 
        let file = e.target.files[0]
        setFile(file)
    }



    const handleChange = (e) => {
        setPublisher({...publisher, [e.target.name]: e.target.value})
        setBook({ ...book, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try{    

            // setBook(book)
            console.log(publisher)
            await BookService.postNewBook(book)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        }catch(error){
            console.log(error)
        }
            window.location('/admin/books')

        // if(file){
        //     let formdata = new FormData()
        //     // formdata.append('file',file, file.name)
        //     formdata.set('data',book)
        //     console.log(file)
        //     console.log(book)
        //     try{    
        //         await BookService.postNewBook(book)
        //         .then((res) => console.log(res))
        //         .catch((err) => console.log(err))
        //     }catch(error){
        //         console.log(error)
        //     }
        //     alert("Th??m th??nh c??ng !")
        //     window.location('/admin/books')
        // }
        
       
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="Container">
                <form>
                    <div className="productContainer">
                        <div className="imgContainer">
                            <img
                                src={
                                    file ? URL.createObjectURL(file): ""
                                }
                                alt=""
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
                                    <div className="publisher">Nh?? xu???t b???n:
                                        <select
                                            name="publisher"
                                            className="select"
                                            onChange={handleChange}
                                            value={publisher}
                                        >
                                            {publishers.map((publisher) => (
                                                <option
                                                    key={publisher.id}
                                                    value={publisher}
                                                >
                                                    {publisher.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="author">T??c gi???:
                                        <select
                                            name="author"
                                            className="select"
                                            onChange={handleChange}
                                            value={author}
                                        >
                                            {authors.map((author) => (
                                                <option
                                                    key={author.id}
                                                    value={author}
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
                                /> ??
                            </span>
                            <Button onClick={handleSubmit}>
                                <span>
                                    <AddCircleOutlineIcon className="icon" />
                                </span>
                                
                                    Th??m
                                
                                
                            </Button>
                            <div className="input-file">
                                <label htmlFor="file" className="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="imgBook"
                                    onChange={handleFileChange}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="productContainer">
                        <div className="infoContainer">
                            <h3 className="title">Th??ng tin s???n ph???m</h3>
                            <div className="detailContainer">
                                <ul>
                                    <li>
                                        <span>Th??? lo???i</span>
                                        <select
                                            name="genre"
                                            className="select"
                                            onChange={handleChange}
                                            value={book.genre}
                                        >
                                            {genres.map((genre) => (
                                                <option
                                                    key={genre.id}
                                                    value={genre}
                                                >
                                                    {genre.name}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <li>
                                        <span>Ng??y xu???t b???n</span>
                                        <input
                                            name="publiccationDate"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.publiccationDate}
                                        />
                                    </li>

                                    <li>
                                        <span>K??ch th?????c</span>
                                        <input
                                            name="size"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.size}
                                        />
                                    </li>
                                    <li>
                                        <span>Tr???ng l?????ng(gr)</span>
                                        <input
                                            name="weight"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.weight}
                                        />
                                    </li>
                                    <li>
                                        <span>S??? trang</span>
                                        <input
                                            name="pages"
                                            type="text"
                                            onChange={handleChange}
                                            value={book.pages}
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
            <p className="title">????nh gi?? s???n ph???m</p>
            <div className="Ratepro">
              <span className="Percent">
                <div className="txtratio">
                  5<span className="txtratiochild">/5</span>
                </div>
                <Rate disabled defaultValue={5}></Rate>
                <div className="txtRate">(0 ????nh gi??)</div>
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
