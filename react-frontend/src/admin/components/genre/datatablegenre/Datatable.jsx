import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import GenreModal from "../genreModal/GenreModal";
import "./datatable.scss";

const DatatableGenre = () => {

  const [genres, setGenres] = useState([]);

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ id: '', name: ''})

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
        setFormData({id: '',name: ''})
      } else {
        const newGenre = {
          name: formData.name
        }
        const response = await BookService.postNewGenre(newGenre)
        alert('Thêm thành công !')
        handleClose();
        getGenres();
        setFormData({ id: '' ,name: ''})
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
        rows={genres}
        columns={genreColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableGenre;
