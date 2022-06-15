import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import BookService from "../../../../service/BookService";
import GenreModal from "../genreModal/GenreModal";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./datatable.scss";

const DatatableGenre = () => {

  const [genres, setGenres] = useState([]);

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ id: '', name: '' })
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const inputEl = useRef("")



  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setFormData({ id: '', name: '' });
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleFormSubmit = async () => {

    try {
      if (formData.id) {
        const updateGenre = {
          name: formData.name
        }
        const respone = await BookService.putGenreById(formData.id, updateGenre)
        alert('Cập nhật thành công !')
        handleClose();
        getGenres();
        setFormData({ id: '', name: '' })
      } else {
        const newGenre = {
          name: formData.name
        }
        const response = await BookService.postNewGenre(newGenre)
        alert('Thêm thành công !')
        handleClose();
        getGenres();
        setFormData({ id: '', name: '' })
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Bạn muốn xóa hàng này ?", id)
    if (confirm) {
      BookService.deleteGenreById(id);
      setGenres(genres.filter(item => item.id != id));
    }
  }

  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }


  const getGenres = () => {
    BookService.getAllGenre()
      .then((res) => {
        setGenres(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getGenres()
  }, []);

  const handleSearch = (searchTerm) => {
    try {
      setSearchTerm(searchTerm)
      // console.log(searchTerm)
      if (searchTerm !== "") {
        const newData = genres.filter((genre) => {
          return Object.values(genre)
            .join("")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        })
        setSearchResults(newData)
        // console.log(newData)
      } else {
        setSearchResults(genres)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getSearch = () => {
    handleSearch(inputEl.current.value);
  }

  const genreColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Thể loại",
      flex: 12.5
    },
    {
      field: "action",
      headerName: "Hành động",
      flex: 2,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleUpdate(params.row)}
            >
              Cập nhập
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];



  return (

    <div className="datatable">
      {
        <GenreModal
          open={open}
          handleClose={handleClose}
          data={formData}
          onChange={onChange}
          handleFormSubmit={handleFormSubmit}
        />
      }

      <div className='navbar'>
        <div className="wrapper">
          <div className="search">
            <input
              ref={inputEl}
              type="text"
              placeholder='Tìm kiếm'
              value={searchTerm}
              onChange={getSearch}
            />
            <SearchOutlinedIcon
              className='search-icon'
            />
          </div>
        </div>
      </div>
      <div className="datatableTitle">
        Quản lí danh mục
        <button
          className="link"
          onClick={handleClickOpen}
        >
          Thêm
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={(searchTerm.length < 1) ? genres : searchResults}
        columns={genreColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableGenre;
