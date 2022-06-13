import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import PublisherModal from "../publisherModal/PublisherModal";
import Button from '@mui/material/Button';

const DatatablePublisher = () => {

  const [publishers, setPublishers] = useState([]);

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({ id: '', name: '' })

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
        const updatePublisher = {
          name: formData.name
        }
        const respone = await BookService.putPublisherById(formData.id, updatePublisher)
        alert('Cập nhập thành công !')
        handleClose();
        getPublishers();
        setFormData({id: '', name: ''}) 
      } else {
        const newPublisher = {
          name: formData.name
        }
        const response = await BookService.postNewPublisher(newPublisher)
        alert('Thêm thành công !')
        handleClose();
        getPublishers();
        setFormData({id: '', name: ''})
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Bạn muốn xóa hàng này ?", id)
    if (confirm) {
      BookService.deletePublisherById(id);
      setPublishers(publishers.filter(item => item.id != id));
    }
  }

  const handleUpdate = (oldData) => {
    setFormData(oldData)
    handleClickOpen()
  }

  const getPublishers = () => {
    BookService.getAllPublisher()
      .then((res) => {
        setPublishers(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPublishers()
  }, []);

  const publisherColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Tên nhà xuất bản",
      flex: 12
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
        <PublisherModal
          open={open}
          handleClose={handleClose}
          data={formData}
          onChange={onChange}
          handleFormSubmit={handleFormSubmit}
        />
      }

      <div className="datatableTitle">
        Quản lí nhà xuất bản
        <button
          className="link"
          onClick={handleClickOpen}
        >
          Thêm
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={publishers}
        columns={publisherColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatablePublisher;
