import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import AuthorModal from "../../author/newauthor/NewAuthor";
import Button from '@mui/material/Button';
import "./datatable.scss";

const DatatableAuthor = () => {

  const [authors, setAuthors] = useState([]);

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', companyName:'' })

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setFormData({ id: '', firstName: '', lastName: '', companyName: '' });
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleFormSubmit = async () => {

    try {
      const id = parseInt(formData.id);
      if (id) {
        const updateAuthor = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName
        }
        const respone = await BookService.putAuthorById(id, updateAuthor)
        handleClose();
        window.location.reload();
      } else {
        const newAuthor = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName
        }
        const response = await BookService.postNewAuthor(newAuthor)
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Bạn muốn xóa hàng này ?", id)
    if (confirm) {
      BookService.deleteAuthorById(id);
      setAuthors(authors.filter(item => item.id != id));
    }
  }

  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }

  useEffect(() => {
    BookService.getAllAuthor()
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const authorColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "firstName",
      headerName: "Họ",
      flex: 2.5
    },
    {
      field: "lastName",
      headerName: "Tên",
      flex: 2.5
    },
    {
      field: "companyName",
      headerName: "Tên công ty",
      flex: 7.5
    },
    {
      field: "action",
      headerName: "Hành động",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => handleUpdate(params.row)}
            >
              Xem</div>
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
        <AuthorModal
          open={open}
          handleClose={handleClose}
          data={formData}
          onChange={onChange}
          handleFormSubmit={handleFormSubmit}
        />
      }

      <div className="datatableTitle">
        Quản lí tác giả
        <button
          className="link"
          onClick={handleClickOpen}
        >
          Thêm
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={authors}
        columns={authorColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableAuthor;
