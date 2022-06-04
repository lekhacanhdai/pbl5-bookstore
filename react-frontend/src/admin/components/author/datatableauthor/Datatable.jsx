import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookService from "../../../../service/BookService";
import NewAuthor from "../newauthor/NewAuthor";
import DetailAuthor from "../detailauthor/Detailauthor";

const DatatableAuthor = () => {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState([])
  const [openmodaladd, setOpenmodalAdd] = useState(false);
  const [openmodalupdate, setOpenmodalUpdate] = useState(false);

  const handleModalAdd = () => {
    setOpenmodalAdd(true);
  };

  const handleModalView = () => {
    setOpenmodalUpdate(true);
  };

  const handleDelete =  async (id) => {
    await BookService.deleteAuthorById(id);
    setAuthors(authors.filter(item => item.id != id));
  };

  useEffect(() => {
    BookService.getAllAuthor()
      .then((res) => {
        setAuthors(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userColumns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "companyName",
      headerName: "Company Name",
      flex:3
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 2
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 7.5
    },
  ];

  

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={handleModalView}>
              View
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Thêm tác giả
        <button className="link" onClick={handleModalAdd}>
          Thêm 
        </button>
        {openmodaladd && <NewAuthor closeModal={setOpenmodalAdd} />}
      </div>
      {openmodalupdate && <DetailAuthor closeModal={setOpenmodalUpdate} />}
      <DataGrid
        className="datagrid"
        rows={authors}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default DatatableAuthor;
